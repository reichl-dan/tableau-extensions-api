/**
 * All error codes used by the Extensions API.
 */
export enum ErrorCodes {
  /**
   * Thrown when caller attempts to execute command before initialization has completed.
   */
  APINotInitialized = 'api-not-initialized',
  /**
   * Only one dialog can be opened at time with the UI namespace functionality.
   */
  DialogAlreadyOpen = 'dialog-already-open',
  /**
   * The open dialog was closed by the user.
   */
  DialogClosedByUser = 'dialog-closed-by-user',
  /**
   * An error occurred within the Tableau Extensions API. Contact Tableau Support.
   */
  InternalError = 'internal-error',
  /**
   * A dialog must start on the same domain as the parent extension.
   */
  InvalidDomainDialog = 'invalid-dialog-domain',
  /**
   * A parameter is not the correct data type or format. The name of the parameter is specified in the Error.message field.
   */
  InvalidParameter = 'invalid-parameter',
  /**
   * Can occur if the extension interacts with a filter that has been removed from the worksheet.
   */
  MissingFilter = 'missing-filter',
  /**
   * Can occur if the extension interacts with a parameter that has been removed from the worksheet.
   */
  MissingParameter = 'missing-parameter',
  /**
   * Internal Server Error
   */
  ServerError = 'server-error',
  /**
   * Developer cannot save settings while another save is still in progress.
   */
  SettingSaveInProgress = 'setting-save-in-progress',
  /**
   * An unknown event name was specified in the call to addEventListener or removeEventListener.
   */
  UnsupportedEventName = 'unsupported-event-name',
  /**
   * A method was used for a type of data source that doesn't support that method
   */
  UnsupportedMethodForDataSourceType = 'unsupported-method-for-data-source-type',
  /**
   * Thrown when caller attempts to execute command while extension is not visible.
   */
  VisibilityError = 'visibility-error',
}
