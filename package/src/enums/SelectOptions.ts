/**
 * Enum for specifying the select option for the extensions.Worksheet.selectTuplesAsync method.
 */
export enum SelectOptions {
  /**
   * Clears existing selection before selecting the tuples specified
   */
  Simple = 'select-options-simple',
  /**
   * Adds specified tuples to the existing selection
   */
  Toggle = 'select-options-toggle',
}
