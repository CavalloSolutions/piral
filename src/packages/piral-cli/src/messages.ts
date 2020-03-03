import { QuickMessage, LogLevels } from './types';

/**
 * @kind Info
 *
 * @summary
 * General information without further content.
 *
 * @abstract
 * Printed to inform you about certain progress in the current command.
 *
 * @see
 * - [Node Console](https://nodejs.org/api/console.html)
 *
 * @example
 * Nothing of interest yet.
 */
export function generalInfo_0000(message: string): QuickMessage {
  return [LogLevels.info, '0000', message];
}

/**
 * @kind Warning
 *
 * @summary
 * General warning without further content.
 *
 * @abstract
 * Printed to inform you about a potential problem that may require
 * changes to your project.
 *
 * @see
 * - [Node Console](https://nodejs.org/api/console.html)
 *
 * @example
 * Nothing of interest yet.
 */
export function generalWarning_0001(message: string): QuickMessage {
  return [LogLevels.warning, '0001', message];
}

/**
 * @kind Error
 *
 * @summary
 * General error without further content.
 *
 * @abstract
 * Printed to inform you about a problem that requires changes to
 * your project.
 *
 * @see
 * - [Node Console](https://nodejs.org/api/console.html)
 *
 * @example
 * Nothing of interest yet.
 */
export function generalError_0002(message: string): QuickMessage {
  return [LogLevels.error, '0002', message];
}

/**
 * @kind Debug
 *
 * @summary
 * General debug message without further content.
 *
 * @abstract
 * Printed to give some indication about the application's current
 * progress and state.
 *
 * @see
 * - [Node Console](https://nodejs.org/api/console.html)
 *
 * @example
 * Nothing of interest yet.
 */
export function generalDebug_0003(message: string): QuickMessage {
  return [LogLevels.debug, '0003', message];
}

/**
 * @kind Verbose
 *
 * @summary
 * General info message without further content.
 *
 * @abstract
 * Printed to inform you about some more detailed progress in the
 * application.
 *
 * @see
 * - [Node Console](https://nodejs.org/api/console.html)
 *
 * @example
 * Nothing of interest yet.
 */
export function generalVerbose_0004(message: string): QuickMessage {
  return [LogLevels.verbose, '0004', message];
}

/**
 * @kind Error
 *
 * @summary
 * Reported when the Piral instance defined in the package.json could not be found.
 *
 * @abstract
 * The Piral instance is defined in the package.json via an object set as value of the "piral" key.
 *
 * The resolution of the Piral instance is done via the `require.resolve` function of Node.js. Thus, if the defined module is simply not yet installed this error will be shown.
 *
 * @see
 * - [npm i](https://docs.npmjs.com/cli/install)
 * - [npm install is missing modules](https://stackoverflow.com/questions/24652681/npm-install-is-missing-modules)
 *
 * @example
 * Assuming that the available package.json of your pilet contains content such as:
 *
 * ```json
 * {
 *   "name": "my-pilet",
 *   // ...
 *   "piral": {
 *     "name": "my-app-shell"
 *   }
 * }
 * ```
 *
 * However, running
 *
 * ```sh
 * ls node_modules/my-app-shell
 * ```
 *
 * returns an error.
 *
 * To mitigate it try running
 *
 * ```sh
 * npm i
 * ```
 *
 * which will install all dependencies.
 */
export function appInstanceNotFound_0010(name: string): QuickMessage {
  return [LogLevels.error, '0010', `The defined Piral instance ("${name}") could not be found.`];
}

/**
 * @kind Error
 *
 * @summary
 * Reported when the Piral instance defined in the package.json seems invalid.
 *
 * @abstract
 * There are a couple of properties that need to be fulfilled by a valid Piral instance.
 * An important property is that the package.json contains an "app" field.
 *
 * The app field denotes the entry point of the Piral instance for bundling purposes.
 * It should be an HTML file.
 *
 * @see
 * - [Parcel HTML Asset](https://parceljs.org/html.html)
 *
 * @example
 * Make sure the package.json of the Piral instance is valid (has an "app" field).
 *
 * This could look as follows:
 *
 * ```json
 * {
 *   "name": "my-piral",
 *   // ...
 *   "app": "src/index.html"
 * }
 * ```
 */
export function appInstanceInvalid_0011(): QuickMessage {
  return [LogLevels.error, '0011', `Could not find a valid Piral instance.`];
}

/**
 * @kind Error
 *
 * @summary
 * No valid package.json found
 *
 * @abstract
 * For performing this action on the pilet more information is required, which should come from
 * the project's package.json.
 *
 * To operate correctly the piral-cli needs to read information provided in the package.json.
 * Unfortunately, in the given scenario no package.json was found, or the contents of the found
 * package.json have not met the expected standard.
 *
 * Make sure to operate the piral-cli only in a valid Node.js project folder. A valid Node.js
 * project folder has a package.json in its root.
 *
 * @see
 * - [NPM Package Specification](https://docs.npmjs.com/files/package.json)
 *
 * @example
 * You can see if you are currently in a correct folder.
 *
 * ```sh
 * ls package.json
 * ```
 *
 * If nothing is displayed make sure to either change to the right directory, or to start a new
 * project using:
 *
 * ```sh
 * npm init
 * ```
 *
 * If you want to start directly with a pilet just use the following command:
 *
 * ```sh
 * npm init pilet
 * ```
 */
export function packageJsonNotFound_0020(): QuickMessage {
  return [LogLevels.error, '0020', `No valid package.json could be found.`];
}

/**
 * @kind Error
 *
 * @summary
 * Cannot pack the pilet - missing name.
 *
 * @abstract
 * For performing this action on the pilet the piral-cli needs to know the name of the pilet.
 * The name of the pilet is provided by the name field specified in its package.json.
 *
 * A valid package.json file requires a valid name. The name has to follow standard naming
 * conventions of the NPM system.
 *
 * @see
 * - [Package Naming Guidelines](https://docs.npmjs.com/package-name-guidelines)
 *
 * @example
 * Check the contents of the available package.json:
 *
 * ```sh
 * cat package.json
 * ```
 *
 * The displayed content should look similar to:
 *
 * ```json
 * {
 *   "name": "my-pilet",
 *   "version": "1.0.0",
 *   "dependencies": {},
 *   "devDependencies": {
 *     "piral-cli": "^0.11.0",
 *     "my-piral": "1.0.0"
 *   },
 *   "piral": {
 *     "name": "my-piral",
 *     "tooling": "0.11.0"
 *   }
 * }
 * ```
 *
 * The exact values do not matter much, but rather the general structure.
 */
export function packageJsonMissingName_0021(): QuickMessage {
  return [LogLevels.error, '0021', `Cannot pack the pilet - missing name.`];
}

/**
 * @kind Error
 *
 * @summary
 * Cannot pack the pilet - missing version.
 *
 * @abstract
 * For performing this action on the pilet the piral-cli needs to know the version of the pilet.
 * The version of the pilet is provided by the version field specified in its package.json.
 *
 * A valid package.json file requires a valid version. The version has to follow standard semver
 * specification.
 *
 * @see
 * - [NPM on Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning)
 *
 * @example
 * Check the contents of the available package.json:
 *
 * ```sh
 * cat package.json
 * ```
 *
 * The displayed content should look similar to:
 *
 * ```json
 * {
 *   "name": "my-pilet",
 *   "version": "1.0.0",
 *   "dependencies": {},
 *   "devDependencies": {
 *     "piral-cli": "^0.11.0",
 *     "my-piral": "1.0.0"
 *   },
 *   "piral": {
 *     "name": "my-piral",
 *     "tooling": "0.11.0"
 *   }
 * }
 * ```
 *
 * The exact values do not matter much, but rather the general structure.
 */
export function packageJsonMissingVersion_0022(): QuickMessage {
  return [LogLevels.error, '0022', `Cannot pack the pilet - missing version.`];
}

/**
 * @kind Error
 *
 * @summary
 * Cannot not find the given full path to successfully scaffold the pilet.
 *
 * @abstract
 * The provided Piral instance resolves to a local file, however, this file cannot be found from the
 * current directory. Either specify an absolute path or make sure that the relative path works for
 * the current working directory.
 *
 * Since no Piral instance can be resolved the scaffolding process needs to be stopped.
 *
 * @see
 * - [Current Working Directory](https://en.wikipedia.org/wiki/Working_directory)
 *
 * @example
 * ...
 */
export function scaffoldPathDoesNotExist_0030(fullPath: string): QuickMessage {
  return [LogLevels.error, '0030', `Could not find "${fullPath}" for scaffolding.`];
}

/**
 * @kind Error
 *
 * @summary
 * The provided target must be an existing directory containing a package.json.
 *
 * @abstract
 * The Piral CLI has to get some meta information for a pilet from its package.json.
 * The meta information include its name, version, which Piral instance to use, as well
 * as other relevant infos.
 *
 * Make sure to start the Piral CLI in the right folder containing a package.json or a
 * subdirectory. Alternatively, make sure to provide an additional path to the Piral
 * CLI via command line parameters.
 *
 * @see
 * - [NPM Package Specification](https://docs.npmjs.com/files/package.json)
 *
 * @example
 * Make sure you are in the right directory by calling commands such as
 *
 * ```sh
 * pwd # gets the current directory
 * ```
 *
 * or
 *
 * ```sh
 * ls -la # gets the files of the current directory
 * ```
 *
 * Navigate to the right directory via the `cd` command.
 */
export function invalidPiletTarget_0040(): QuickMessage {
  return [LogLevels.error, '0040', `The provided target directory is not a valid.`];
}

/**
 * @kind Error
 *
 * @summary
 * The section "piral" in the "package.json" file is missing.
 *
 * @abstract
 * The Piral CLI has to get some meta information for a pilet from its package.json.
 * The meta information include its name, version, which Piral instance to use, as well
 * as other relevant infos.
 *
 * Make sure that you modified the package.json correctly using the specification for
 * pilets or that the pilet was initially created / scaffolded by the Piral CLI using
 * the
 *
 * ```sh
 * pilet new
 * ```
 *
 * command.
 *
 * Specifically, the package.json needs to contain a special key called `piral`, which
 * contains an object with additional fields.
 *
 * @see
 * - [Pilet Package Definition](https://docs.piral.io/reference/documentation/reference#pilets---package-definition)
 *
 * @example
 * Your pilet's package.json may look similar to the following snippet:
 *
 * ```json
 * {
 *   "name": "my-pilet",
 *   "version": "1.0.0",
 *   "devDependencies": {
 *     "my-piral": "1.0.0",
 *     "piral-cli": "0.11.0"
 *   },
 *   "piral": {
 *     "name": "my-piral",
 *     "tooling": "0.11.0"
 *   }
 * }
 * ```
 */
export function invalidPiletPackage_0041(): QuickMessage {
  return [LogLevels.error, '0041', `Could not find a Piral instance reference.`];
}

/**
 * @kind Error
 *
 * @summary
 * The field "name" <string> in the "piral" section of the "package.json" file is missing.
 *
 * @abstract
 * The Piral CLI has to get some meta information for a pilet from its package.json.
 * The meta information include its name, version, which Piral instance to use, as well
 * as other relevant infos.
 *
 * Make sure that you modified the package.json correctly using the specification for
 * pilets or that the pilet was initially created / scaffolded by the Piral CLI using
 * the
 *
 * ```sh
 * pilet new
 * ```
 *
 * command.
 *
 * Specifically, the package.json needs to contain a special section called `piral`, which
 * should contain (among others) a field `name` pointing to the Piral instance to use.
 *
 * @see
 * - [Pilet Package Definition](https://docs.piral.io/reference/documentation/reference#pilets---package-definition)
 *
 * @example
 * If your Piral instance is called `my-piral` then the package.json may look similar to
 * the following snippet:
 *
 * ```json
 * {
 *   "name": "my-pilet",
 *   "version": "1.0.0",
 *   "devDependencies": {
 *     "my-piral": "1.0.0",
 *     "piral-cli": "0.11.0"
 *   },
 *   "piral": {
 *     "name": "my-piral",
 *     "tooling": "0.11.0"
 *   }
 * }
 * ```
 */
export function invalidPiletPackage_0042(): QuickMessage {
  return [LogLevels.error, '0042', `Could not find a Piral instance reference.`];
}

/**
 * @kind Error
 *
 * @summary
 * The reference to the Piral instance in the "package.json" file is invalid.
 *
 * @abstract
 * Even though everything seems to be correct on the first glance it may be that the
 * actual reference is broken. This could be due to various reasons.
 *
 * - NPM linking is broken
 * - The dependencies have not been installed yet (run `npm i`)
 * - The Piral instance's name is invalid (e.g., due to a typo)
 *
 * @see
 * - [Pilet Package Definition](https://docs.piral.io/reference/documentation/reference#pilets---package-definition)
 * - [Node Modules Loading](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders)
 *
 * @example
 * Let's say you just cloned the pilet via
 *
 * ```sh
 * git clone https://myhub.com/mypilet
 * ```
 *
 * Right now the dependencies should still be missing as dependencies are usually not
 * checked in. Under these circumstances the Piral instance reference is invalid.
 *
 * Make sure to resolve the dependencies correctly by running
 *
 * ```sh
 * npm i
 * ```
 */
export function invalidPiralReference_0043(): QuickMessage {
  return [LogLevels.error, '0043', `Invalid Piral instance reference.`];
}

/**
 * @kind Error
 *
 * @summary
 * The desired target directory could not be created.
 *
 * @abstract
 * When a non-existing target directory is specified the Piral CLI needs to create it first. This,
 * however, can lead to problems if
 *
 * - the file system is corrupted
 * - necessary privileges are missing
 * - the given path is invalid
 *
 * If one of these cases is hit the Piral CLI needs to stop the action.
 *
 * @see
 * - [File System Permissions](https://en.wikipedia.org/wiki/File_system_permissions)
 *
 * @example
 * On nix systems the easiest way to ensure ownership of a folder is using the `chmod` command.
 * Make sure, however, to only expand permissions when overall security is still ensured.
 *
 * Ideally, you'd select a folder that is below your home directory. That way the necessary
 * permissions are there by definition.
 *
 * On nix systems you can change to your home directory via:
 *
 * ```sh
 * cd ~
 * ```
 *
 * On Windows you can use:
 *
 * ```sh
 * cd %HOMEPATH%
 * ```
 */
export function cannotCreateDirectory_0044(): QuickMessage {
  return [LogLevels.error, '0044', 'Could not create the target directory.'];
}

/**
 * @kind Warning
 *
 * @summary
 * Reported when a file could not be overwritten.
 *
 * @abstract
 * Usually, this only indicates that a file already existed and was not overwritten.
 * There are three modes concerning the overwrite policy:
 *
 * - Do not overwrite (usually the default)
 * - Ask before overwriting
 * - Always overwrite
 *
 * In the first mode the warning is produced to indicate an operation was not
 * performed due to the integrated overwrite protection.
 *
 * @see
 * - [File System Permissions](https://en.wikipedia.org/wiki/File_system_permissions)
 *
 * @example
 * Many commands allow setting the overwrite mode. For instance, when performing an
 * upgrade of a pilet we can set it.
 *
 * To ask before overwriting the following command works:
 *
 * ```sh
 * pilet upgrade --force-overwrite prompt
 * ```
 *
 * If you want to always overwrite use:
 *
 * ```sh
 * pilet upgrade --force-overwrite yes
 * ```
 */
export function didNotOverWriteFile_0045(file: string): QuickMessage {
  return [LogLevels.warning, '0045', `Did not overwrite: File ${file} already exists.`];
}

/**
 * @kind Warning
 *
 * @summary
 * Reported when the Piral instance is locally resolved, but no location for the upgrade is known.
 *
 * @abstract
 * The Piral instance is currently resolved locally, but no local file for the upgrade has been specified.
 *
 * Since the local resolution only works against a filename the update process has also to be triggered with
 * a file location. Otherwise, there is no chance to know a different file location.
 *
 * Potentially, you wanted to switch / resolve the module from NPM instead. Therefore, we are then trying to
 * obtain the Piral instance from NPM instead using the known name.
 *
 * @see
 * - [Local File Dependencies](https://stackoverflow.com/questions/14381898/local-dependency-in-package-json)
 *
 * @example
 * You may have set up the pilet using a locally available tgz file. In this case your original command may
 * have looked similar to:
 *
 * ```json
 * pilet new ../../my-app-shell/dist/develop/my-app-shell-1.0.0.tgz
 * ```
 *
 * To run an upgrade in such a scenario a command such as
 *
 * ```sh
 * pilet upgrade ../../my-app-shell/dist/develop/my-app-shell-1.1.0.tgz
 * ```
 *
 * needs to be used.
 */
export function localeFileForUpgradeMissing_0050(): QuickMessage {
  return [LogLevels.warning, '0050', `No local file for the upgrade has been specified.`];
}

/**
 * @kind Warning
 *
 * @summary
 * Reported when the Piral instance is resolved via git, but an invalid version was specified.
 *
 * @abstract
 * The Piral instance is currently resolved via Git, but latest was not used to try a direct update.
 *
 * Right now we only support "latest" for Git resolved Piral instances. In this scenario we obtain the
 * current head from the repository's default branch and update accordingly.
 *
 * Potentially, you wanted to switch / resolve the module from NPM instead. Therefore, we are then trying to
 * obtain the Piral instance from NPM instead using the known name.
 *
 * @see
 * - [Git Dependencies in NPM](https://medium.com/@jonchurch/use-github-branch-as-dependency-in-package-json-5eb609c81f1a)
 *
 * @example
 * You may have set up the pilet using a locally available tgz file. In this case your original command may
 * have looked similar to:
 *
 * ```json
 * pilet new https://github.com/foo/my-app-shell.git
 * ```
 *
 * To run an upgrade in such a scenario a command such as
 *
 * ```sh
 * pilet upgrade latest
 * ```
 *
 * needs to be used.
 *
 * Since "latest" is the default version the specifier can actually be omitted, too.
 */
export function gitLatestForUpgradeMissing_0051(): QuickMessage {
  return [LogLevels.warning, '0051', `No valid version has been not used.`];
}

/**
 * @kind Warning
 *
 * @summary
 * Reported when the version of a dependency cannot be resolved.
 *
 * @abstract
 * When a pilet is scaffolded from a Piral instance special dev tools may be installed
 * as specified from the "devDependencies" section in the "pilets" section.
 *
 * The default version resolution falls back to the version specified already in the
 * standard "devDependencies" of the Piral instance's package.json.
 *
 * Under some conditions no version of the specified dependency can be determined.
 *
 * The conditions may be:
 *
 * - Missing dev dependencies
 * - Invalid dev dependencies
 * - Disk failures
 *
 * @see
 * - [Piral Instance Package Definition](https://docs.piral.io/reference/documentation/reference#piral-instance---package-definition)
 *
 * @example
 * The primary example hits when a dev dependency was specified that is otherwise not given.
 *
 * Consider the following package.json:
 *
 * ```json
 * {
 *   "name": "my-piral",
 *   "devDependencies": {},
 *   "pilets": {
 *     "devDependencies": {
 *       "prettier": true
 *     }
 *   }
 * }
 * ```
 */
export function cannotResolveVersion_0052(name: string): QuickMessage {
  return [LogLevels.warning, '0052', `The version for "${name}" could not be resolved. Using "latest".`];
}

/**
 * @kind Warning
 *
 * @summary
 * Reported when a dependency cannot be resolved.
 *
 * @abstract
 * ...
 *
 * @see
 * - [Piral Instance Package Definition](https://docs.piral.io/reference/documentation/reference#piral-instance---package-definition)
 *
 * @example
 * ...
 */
export function cannotResolveDependency_0053(name: string, rootDir: string): QuickMessage {
  return [LogLevels.warning, '0053', `Could not resolve "${name}" from "${rootDir}". Taking "latest" version.`];
}

/**
 * @kind Error
 *
 * @summary
 * Incomplete configuration. Missing URL of the pilet feed.
 *
 * @abstract
 * The publish command works either against the official public feed using a feed name
 * (e.g., `sample`) or a fully qualified URL working against *any* feed service.
 *
 * Make sure that the provided publish endpoint URL follows the Feed Service API specification.
 *
 * If the URL is missing (i.e., not provided) then the Piral CLI does not know to which feed
 * service to publish.
 *
 * @see
 * - [Feed API Specification](https://docs.piral.io/reference/specifications/feed-api-specification)
 *
 * @example
 * Always specify the URL via the `--url` provider.
 *
 * ```sh
 * pilet publish --url https://feed.piral.io/api/v1/pilet/sample
 * ```
 */
export function missingPiletFeedUrl_0060(): QuickMessage {
  return [LogLevels.error, '0060', `Missing pilet feed service URL.`];
}

/**
 * @kind Error
 *
 * @summary
 * Could not find a valid pilet to upload to the pilet feed.
 *
 * @abstract
 * The `pilet publish` commands works against an already created pilet package.
 * If no pilet package is yet available the command will ultimately fail.
 *
 * There are a couple of options. For instance, using the `--fresh` flag it is
 * possible to trigger a `pilet build` and `pilet pack` process implicitly.
 *
 * Otherwise, make sure to have a `.tgz` file in the directory or specify it
 * directly.
 *
 * @see
 * - [NPM Pack](https://docs.npmjs.com/cli-commands/pack.html)
 *
 * @example
 * Make sure to have build a pilet beforehand:
 *
 * ```sh
 * pilet build
 * ```
 *
 * Then you should pack the current contents:
 *
 * ```sh
 * pilet pack
 * ```
 *
 * Finally, you can publish it:
 *
 * ```sh
 * pilet publish --url sample
 * ```
 *
 * To do these three commands in one sweep just use `--fresh`:
 *
 * ```sh
 * pilet publish --fresh --url sample
 * ```
 *
 * Using multiple commands is preferred if you use custom options, otherwise
 * just go for the single command.
 */
export function missingPiletTarball_0061(source: string): QuickMessage {
  return [LogLevels.error, '0061', `No files found using pattern "${source}".`];
}

/**
 * @kind Warning
 *
 * @summary
 * Could not upload the pilet to the pilet feed.
 *
 * @abstract
 * Uploading to the pilet feed service API failed. This could have various reasons:
 *
 * - Loss of connectivity
 * - The provided authentication was invalid or missing
 * - The URL was invalid
 * - The feed service does not follow the specification
 * - A custom condition from the feed service was rejected
 * - The given pilet was already available at the feed service
 *
 * The Piral CLI will print the error response from the feed service. Please contact
 * your feed service admin if nothing was printed.
 *
 * @see
 * - [Feed API Specification](https://docs.piral.io/reference/specifications/feed-api-specification)
 *
 * @example
 * Make sure that you are connected to the internet and that the desired feed service URL
 * can be reached from your computer.
 *
 * Run
 *
 * ```sh
 * pilet publish --fresh --url https://myfeedservice.com/api/pilet
 * ```
 *
 * Look at the error response. Make sure that your version is not yet published. If other
 * conditions (e.g., a certain naming convention for your pilet) need to be followed adjust
 * the package.json accordingly.
 */
export function failedToUpload_0062(fileName: string): QuickMessage {
  return [LogLevels.warning, '0062', `Could not upload "${fileName}" to feed service.`];
}

/**
 * @kind Warning
 *
 * @summary
 * Could not read the contents from the pilet.
 *
 * @abstract
 * Publishing pilet requires a valid tgz file that can be read and transmitted.
 * If such a file can be found, however, cannot be opened then we have no chance
 * of publishing the pilet.
 *
 * This warning is thus emitted in case of:
 *
 * - an empty tgz file
 * - an inaccessible tgz file
 *
 * Make sure that the disk is properly functioning and that necessary permissions
 * are set to allow accessing the file.
 *
 * @see
 * - [File System Permissions](https://en.wikipedia.org/wiki/File_system_permissions)
 *
 * @example
 * Find the available tgz files:
 *
 * ```sh
 * ls -la *.tgz
 * ```
 *
 * Make sure that at least one tgz file is available. Check the displayed permissions
 * and use `chmod` to set the right permissions.
 *
 * Usually, changing permissions should not be required at all. Make sure you operate
 * from the same user account as when the tgz file was created.
 */
export function failedToRead_0063(fileName: string): QuickMessage {
  return [LogLevels.warning, '0063', `Could not read the file "${fileName}".`];
}

/**
 * @kind Error
 *
 * @summary
 * Did finish uploading the pilet(s) with errors.
 *
 * @abstract
 * The Piral CLI tries to upload all matched .tgz files. In case of
 * multiple hits all files are published. This may not be the behavior you
 * look for as it will lead to errors in case of already published pilets.
 *
 * To avoid uploading already published pilets either perform a fresh
 * build omitting any tgz inputs at all or specify the tgz file directly.
 *
 * @see
 * - [Semantic Versioning](https://semver.org)
 *
 * @example
 * To perform a fresh build use the following command:
 *
 * ```sh
 * pilet publish --fresh --url sample
 * ```
 *
 * In order to specify the file explicitly just use a positional argument.
 *
 * ```sh
 * pilet publish my-pilet-1.0.0.tgz --url sample
 * ```
 *
 * Make sure that the specified file exists.
 *
 * Additionally, you can use globs to match multiple files.
 */
export function failedUploading_0064(): QuickMessage {
  return [LogLevels.error, '0064', 'Failed to upload some pilet(s)!'];
}

/**
 * @kind Error
 *
 * @summary
 * The HTTP post request failed.
 *
 * @abstract
 * While submitting the HTTP post request an error was reported. This usually indicates
 * a problem with the network, either due to
 *
 * - loss of connectivity
 * - an invalid host name (DNS broken)
 * - a system restriction (e.g., firewall)
 * - invalid SSL certificate
 *
 * Make sure to understand the presented Node.js error before proceeding.
 *
 * @see
 * - [Feed API Specification](https://docs.piral.io/reference/specifications/feed-api-specification)
 *
 * @example
 * The easiest way to replicate an error would be to use an invalid host.
 *
 * ```sh
 * pilet publish --url https://doesnotexist/api/pilet
 * ```
 */
export function failedHttpPost_0065(error: string): QuickMessage {
  return [LogLevels.error, '0065', `Failed to upload via HTTP: ${error}.`];
}

/**
 * @kind Warning
 *
 * @summary
 * The HTTP post request was reported to be unsuccessful.
 *
 * @abstract
 * The URL could be reached, however, the returned status code did not indicate success.
 * Note that only a status code of 200 will be interpreted as successful.
 *
 * The error message prints the received status text and status code. Usually, this should be
 * sufficient to know where the problem lies. Some feed service implementations will also provide
 * a custom payload with further information. This response body will also be printed.
 *
 * @see
 * - [Feed API Specification](https://docs.piral.io/reference/specifications/feed-api-specification)
 *
 * @example
 * The easiest way to replicate an error would be to use any URL.
 *
 * ```sh
 * pilet publish --url https://example.com/api/pilet
 * ```
 */
export function unsuccessfulHttpPost_0066(statusText: string, statusCode: number, error: string): QuickMessage {
  return [LogLevels.warning, '0066', `Failed to upload: ${statusText} (${statusCode}). ${error}`];
}

/**
 * @kind Error
 *
 * @summary
 * ...
 *
 * @abstract
 * ...
 *
 * @see
 * - [Git Dependencies in NPM](https://medium.com/@jonchurch/use-github-branch-as-dependency-in-package-json-5eb609c81f1a)
 *
 * @example
 * ...
 */
export function entryPointMissing_0070(rootDir: string): QuickMessage {
  return [LogLevels.error, '0070', `Cannot find a valid entry point. Missing package.json in "${rootDir}".`];
}

/**
 * @kind Error
 *
 * @summary
 * ...
 *
 * @abstract
 * ...
 *
 * @see
 * - [Git Dependencies in NPM](https://medium.com/@jonchurch/use-github-branch-as-dependency-in-package-json-5eb609c81f1a)
 *
 * @example
 * ...
 */
export function entryPointMissing_0071(): QuickMessage {
  return [LogLevels.error, '0071', `Cannot find a valid entry point. Missing field "app" in the "package.json".`];
}

/**
 * @kind Warning
 *
 * @summary
 * ...
 *
 * @abstract
 * ...
 *
 * @see
 * - [Git Dependencies in NPM](https://medium.com/@jonchurch/use-github-branch-as-dependency-in-package-json-5eb609c81f1a)
 *
 * @example
 * ...
 */
export function expectedArray_0072(key: string, type: string): QuickMessage {
  return [LogLevels.warning, '0072', `The value of "${key}" should be an array. Found "${type}".`];
}

/**
 * @kind Error
 *
 * @summary
 * ...
 *
 * @abstract
 * ...
 *
 * @see
 * - [Git Dependencies in NPM](https://medium.com/@jonchurch/use-github-branch-as-dependency-in-package-json-5eb609c81f1a)
 *
 * @example
 * ...
 */
export function entryPointNotFound_0073(app: string): QuickMessage {
  return [LogLevels.error, '0073', `The given entry pointing to "${app}" does not exist.`];
}

/**
 * @kind Error
 *
 * @summary
 * ...
 *
 * @abstract
 * ...
 *
 * @see
 * - [Git Dependencies in NPM](https://medium.com/@jonchurch/use-github-branch-as-dependency-in-package-json-5eb609c81f1a)
 *
 * @example
 * ...
 */
export function packageJsonMissing_0074(): QuickMessage {
  return [
    LogLevels.error,
    '0074',
    'Cannot find the "package.json". You need a valid package.json for your Piral instance.',
  ];
}

/**
 * @kind Error
 *
 * @summary
 * ...
 *
 * @abstract
 * ...
 *
 * @see
 * - [Git Dependencies in NPM](https://medium.com/@jonchurch/use-github-branch-as-dependency-in-package-json-5eb609c81f1a)
 *
 * @example
 * ...
 */
export function packageJsonMissing_0075(): QuickMessage {
  return [LogLevels.error, '0075', 'Cannot find the "package.json". You need a valid package.json for your pilet.'];
}

/**
 * @kind Warning
 *
 * @summary
 * The Piral CLI detected a misalignment between the used version of the tooling in the Piral instance and the currently
 * used version of the tooling.
 *
 * @abstract
 * The tooling of the pilet and the tooling used to produce the Piral instance should be aligned at least with their most
 * significant ("major") version. As such using the Piral CLI for building the emulator package in version 0.10.5 should be
 * aligned with a similar 0.10.x version of the Piral CLI for the pilet.
 *
 * Recommendation: Update to the same version of the Piral CLI.
 *
 * ```sh
 * npm i piral-cli@{piralVersion}
 * ```
 *
 * Alternatively, you can also try to update the Piral instance.
 *
 * @see
 * - [Semantic Versioning](https://semver.org)
 *
 * @example
 * As an example the following package.json may be given:
 *
 * ```json
 * {
 *   "name": "my-pilet",
 *   "dependencies": {},
 *   "devDependencies": {
 *     "my-app-shell": "^1.0.0"
 *     "piral-cli": "^0.11.0"
 *   },
 *   "piral": {
 *     "name": "my-app-shell",
 *     "tooling": "0.10.3"
 *   }
 * }
 * ```
 *
 * Since the used Piral instance is using the 0.10.3 version of the piral-cli the pilet should also use a 0.10.x version.
 *
 * To solve this just update the Piral CLI accordingly.
 *
 * ```sh
 * npm i piral-cli@0.10.3
 * ```
 */
export function appShellIncompatible_0100(piralVersion: string, cliVersion: string): QuickMessage {
  return [
    LogLevels.warning,
    '0100',
    `The Piral instance's CLI version (${piralVersion}) may be incompatible to the used version (${cliVersion}).`,
  ];
}

/**
 * @kind Warning
 *
 * @summary
 * The Piral CLI detected a misalignment between the used version of the framework and the used version of the tooling.
 *
 * @abstract
 * The tooling and the framework of Piral should aligned at least with their most significant ("major") version. As such
 * using Piral in the frontend in version 0.10.5 should be aligned with a similar 0.10.x version of the Piral CLI for the
 * tooling.
 *
 * Recommendation: Update to the same version of the Piral CLI.
 *
 * ```sh
 * npm i piral-cli@{piralVersion}
 * ```
 *
 * Alternatively, you can also change the used version of Piral.
 *
 * @see
 * - [Semantic Versioning](https://semver.org)
 *
 * @example
 * As an example the following package.json may be given:
 *
 * ```json
 * {
 *   "name": "my-app-shell",
 *   "dependencies": {
 *     "piral": "^0.10.0"
 *   },
 *   "devDependencies": {
 *     "piral-cli": "^0.11.0"
 *   }
 * }
 * ```
 *
 * Since Piral itself is using the 0.10.x version the used Piral CLI should also be using a 0.10.x version.
 *
 * To solve this just update the Piral CLI accordingly.
 *
 * ```sh
 * npm i piral-cli@^0.10.0
 * ```
 */
export function toolingIncompatible_0101(piralVersion: string, cliVersion: string): QuickMessage {
  return [
    LogLevels.warning,
    '0101',
    `The version of Piral (${piralVersion}) may be incompatible to the used version of "piral-cli" (${cliVersion}).`,
  ];
}

/**
 * @kind Warning
 *
 * @summary
 * The browser could not be opened.
 *
 * @abstract
 * The Piral CLI uses a package called "open" for automatically opening a browser.
 * The package tries to find the system's default browser and open it with the URL
 * given by the currently started debug process.
 *
 * This will fail under the following circumstances:
 *
 * - There are not enough rights to know what is the default browser
 * - There are not enough rights to open the default browser
 * - The default browser cannot be opened
 * - The API for opening the default browser is invalid
 *
 * @see
 * - [NPM Open Package](https://www.npmjs.com/package/open)
 *
 * @example
 * The browser is usually just opened via the command line:
 *
 * ```sh
 * pilet debug --open
 * ```
 */
export function failedToOpenBrowser_0070(error: string): QuickMessage {
  return [LogLevels.error, '0070', `Unexpected error while opening in browser: ${error}.`];
}

/**
 * @kind Warning
 *
 * @summary
 * An invalid pilet schema version was found.
 *
 * @abstract
 * ...
 *
 * @see
 * - [Semantic Versioning](https://semver.org)
 *
 * @example
 * ...
 */
export function invalidSchemaVersion_0071(schemaVersion: string): QuickMessage {
  return [LogLevels.warning, '0071', `Found invalid pilet schema version "${schemaVersion}". Expected "v0" or "v1".`];
}

/**
 * @kind Warning
 *
 * @summary
 * An invalid argument for "commandName" was supplied.
 *
 * @abstract
 * ...
 *
 * @see
 * - [Semantic Versioning](https://semver.org)
 *
 * @example
 * ...
 */
export function apiCommandNameInvalid_0200(type: string): QuickMessage {
  return [LogLevels.warning, '0200', `Invalid argument for "commandName" - no ${type} added.`];
}

/**
 * @kind Warning
 *
 * @summary
 * An invalid value for the given argument was supplied.
 *
 * @abstract
 * ...
 *
 * @see
 * - [Semantic Versioning](https://semver.org)
 *
 * @example
 * ...
 */
export function apiArgumentInvalid_0201(name: string, type: string): QuickMessage {
  return [LogLevels.warning, '0201', `Invalid argument for "${name}" - no ${type} added.`];
}

/**
 * @kind Warning
 *
 * @summary
 * An invalid argument for "name" was supplied.
 *
 * @abstract
 * ...
 *
 * @see
 * - [Semantic Versioning](https://semver.org)
 *
 * @example
 * ...
 */
export function apiValidateNameInvalid_0202(type: string): QuickMessage {
  return [LogLevels.warning, '0202', `Invalid argument for "name" - no ${type} rule added.`];
}

/**
 * @kind Warning
 *
 * @summary
 * An invalid argument for "run" was supplied.
 *
 * @abstract
 * ...
 *
 * @see
 * - [Semantic Versioning](https://semver.org)
 *
 * @example
 * ...
 */
export function apiValidateRunInvalid_0203(type: string): QuickMessage {
  return [LogLevels.warning, '0203', `Invalid argument for "run" - no ${type} rule added.`];
}

/**
 * @kind Warning
 *
 * @summary
 * An invalid value for the given argument was supplied.
 *
 * @abstract
 * ...
 *
 * @see
 * - [Semantic Versioning](https://semver.org)
 *
 * @example
 * ...
 */
export function apiPatchInvalid_0204(name: string): QuickMessage {
  return [LogLevels.warning, '0204', `Invalid argument for "${name}" - nothing installed.`];
}
