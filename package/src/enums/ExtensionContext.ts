/**
 * Represents the context in which the extension is running.
 */
export enum ExtensionContext {
  /**
   * The extension is running in desktop mode
   */
  Desktop = 'desktop',
  /**
   * The extension is running in server mode
   */
  Server = 'server',
}
