/**
 * Configuration for an application config option.
 */
export declare interface ApplicationOption {
  name: string;
  shortcut: string;
  type: any;
  isArray?: boolean;
}
/**
 * Configuration option after internal processing
 */
export declare interface ProcessedApplicationOption extends ApplicationOption {
  value?: any;
  skipNext: boolean;
}
/**
 * An object generated by the `ApplicationOptions` class.
 */
export declare interface ApplicationOptionsConfig {
  settingsFile?: string;
  themesPath?: string;
  workspacePath?: string;
  debug?: boolean;
  debugLevel?: 'debug'|'error'|'info'|'silly'|'verbose'|'warn';
  withDevtools?: boolean;
  // this is for development purposes only
  port?: number;
  // the domain model file to open.
  open?: string;
  /**
   * When set it prohibits the application from auto update.
   */
  skipAppUpdate?: boolean;
  skipThemesUpdate?: boolean;
  userDataDir?: string;
  /**
   * Overrides current configuration for the release channel.
   */
  releaseChannel?: string;
  openProtocolFile?: string;
}

/**
 * When the application was opened from the protocol handler it will
 * have a path that looks like `domain://[source]/[action]/[id]`
 */
export declare interface ProtocolFile {
  source: string;
  action: string;
  id: string;
}

/**
 * The final config object distributed to all windows.
 */
export declare interface ApplicationConfig {
  /**
   * Whether the telemetry is enabled.
   */
  telemetry?: boolean;
  /**
   * Application release channel.
   */
  releaseChannel?: 'beta' | 'alpha' | 'latest';
  /**
   * Whether the automatic updates are enabled.
   * True by default.
   */
  autoUpdate?: boolean;
}

export declare interface WindowsSessionSchema {
  windows: WindowSession[];
}

/**
 * Interface describing a data structure for a window sizes and positions.
 * Used in `WindowPersistance`.
 */
export declare interface WindowSession {
  /**
   * The id of the window.
   */
  id?: number,
  width?: number;
  height?: number;
  x?: number;
  y?: number;
}

export declare interface OpenPageOptions {
  /**
   * The name of the page in the `src/app/` directory to load in the window.
   * Default to `app.html`.
   */
  page?: string;
  /**
   * A string to be appended to the has part of the loaded URL.
   * No default value.
   */
  route?: string;
  /**
   * The name of the preload script located in the `src/preload/` folder.
   * When not set no preload script is loaded, unless loading the default page (no value on `page`),
   * then it is set to `arc-preload.js`.
   */
  preload?: string;
  /**
   * A list of init parameters to append to the loaded page's query string.
   */
  params?: {[key: string]: string};
  /**
   * The workspace file that has been requested to open with the window.
   * This is only for the main application window.
   */
  workspaceFile?: string;
}

export declare interface ArcAppInitOptions {
  /**
   * Tells whether dark mode should be enabled, due to system settings.
   */
  darkMode?: boolean;
  /**
   * The backend id of the workspace file.
   */
  workspaceId?: string;
}
