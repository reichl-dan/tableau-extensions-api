import type * as Enums from '../enums/_enums'

/**
 * Custom error class that extends the default JavaScript Error object.
 */
export interface TableauError extends Error {
  /**
   * The Tableau specific error code for this error
   */
  errorCode: Enums.ErrorCodes
}
