import { ReactChild, isValidElement, createElement } from 'react';
import {
  isfunc,
  buildName,
  PiralPlugin,
  Dict,
  withApi,
  PiletApi,
  GlobalStateContext,
  withAll,
  GlobalState,
  withRootExtension,
} from 'piral-core';
import { createActions } from './actions';
import { DefaultContainer, DefaultInput, DefaultResult } from './default';
import { Search } from './Search';
import { SearchInput } from './SearchInput';
import {
  PiletSearchApi,
  SearchSettings,
  SearchHandler,
  SearchProviderRegistration,
  SearchResultType,
  SearchActionsConfig,
} from './types';

export interface InitialSearchProvider {
  /**
   * Defines the search handler.
   */
  search: SearchHandler;
  /**
   * The optional settings to be defined.
   */
  settings?: SearchSettings;
}

/**
 * Available configuration options for the search plugin.
 */
export interface SearchConfig extends SearchActionsConfig {
  /**
   * Sets the providers to be given by the app shell.
   * @default []
   */
  providers?: Array<InitialSearchProvider>;
  /**
   * Sets the initial results of the search.
   * @default []
   */
  results?: Array<ReactChild>;
  /**
   * Sets the initial query.
   * @default ''
   */
  query?: string;
  /**
   * Determines if the providers are also used for an empty query.
   * @default false
   */
  emptyTrigger?: boolean;
  /**
   * Allows filtering of the search providers to query.
   * @param query The query that should be run.
   * @param providerNames The names of the available search providers.
   * @default undefined
   */
  filter?(query: string, providerNames: Array<string>): Array<string>;
}

function noop() {}

function createSearchRegistration(
  pilet: string,
  search: SearchHandler,
  settings: SearchSettings = {},
): SearchProviderRegistration {
  const { onlyImmediate = false, onCancel = noop, onClear = noop, ...rest } = settings;
  return {
    ...rest,
    pilet,
    onlyImmediate,
    cancel: isfunc(onCancel) ? onCancel : noop,
    clear: isfunc(onClear) ? onClear : noop,
    search,
  };
}

function getSearchProviders(providers: Array<InitialSearchProvider>) {
  const searchProviders: Dict<SearchProviderRegistration> = {};
  let i = 0;

  for (const { search, settings } of providers) {
    searchProviders[`global-${i++}`] = createSearchRegistration(undefined, search, settings);
  }

  return searchProviders;
}

function toChild(content: SearchResultType, api: PiletApi, context: GlobalStateContext): ReactChild {
  if (typeof content === 'string' || isValidElement(content)) {
    return content;
  } else {
    const component = withApi(context, content, api, 'extension');
    return createElement(component);
  }
}

function wrapResults(
  result: SearchResultType | Array<SearchResultType>,
  api: PiletApi,
  context: GlobalStateContext,
): Array<ReactChild> {
  const results = Array.isArray(result) ? result : [result];
  return results.map((item) => toChild(item, api, context));
}

function withSearch(searchProviders: Dict<SearchProviderRegistration>, query: string, items: Array<ReactChild>) {
  return (state: GlobalState): GlobalState => ({
    ...state,
    components: {
      SearchContainer: DefaultContainer,
      SearchInput: DefaultInput,
      SearchResult: DefaultResult,
      ...state.components,
    },
    registry: {
      ...state.registry,
      searchProviders,
    },
    search: {
      input: query,
      results: {
        loading: false,
        items,
      },
    },
  });
}

/**
 * Creates new Pilet API extensions for search and filtering.
 */
export function createSearchApi(config: SearchConfig = {}): PiralPlugin<PiletSearchApi> {
  const { providers = [], results = [], query = '', ...actionConfig } = config;

  return (context) => {
    context.defineActions(createActions(actionConfig));

    context.dispatch(
      withAll(
        withSearch(getSearchProviders(providers), query, results),
        withRootExtension('piral-search', Search),
        withRootExtension('piral-search-input', SearchInput),
      ),
    );

    return (api, target) => {
      const pilet = target.name;
      let next = 0;

      return {
        registerSearchProvider(name, provider, settings?) {
          if (typeof name !== 'string') {
            settings = provider;
            provider = name;
            name = next++;
          }

          const id = buildName(pilet, name);
          context.registerSearchProvider(
            id,
            createSearchRegistration(
              pilet,
              (q) =>
                Promise.resolve(provider(q, api)).then(
                  (results) => wrapResults(results, api, context),
                  () => [],
                ),
              settings,
            ),
          );
          return () => api.unregisterSearchProvider(name);
        },
        unregisterSearchProvider(name) {
          const id = buildName(pilet, name);
          context.unregisterSearchProvider(id);
        },
      };
    };
  };
}
