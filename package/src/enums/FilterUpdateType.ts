/**
 * The type of filter update that can occur.
 */
export enum FilterUpdateType {
  /**
   * Add values to filter
   */
  Add = 'add',
  /**
   * All values in filter
   */
  All = 'all',
  /**
   * Remove values from filter
   */
  Remove = 'remove',
  /**
   * Replace values in filter
   */
  Replace = 'replace',
}
