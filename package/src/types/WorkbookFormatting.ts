import type { FormattingSheet } from './_types'

/**
 * The Workbook formatting contains an array of Formatting sheets. Each of these sheets can be identified by the ClassNameKey and contains the CSS properties needed to mimic the formatting on your workbook.
 * @since 1.7.0 and Tableau 2021.4
 */
export interface WorkbookFormatting {
  /**
   * An array of formatting sheets that contain the css properties for a tableau workbook.
   */
  formattingSheets: FormattingSheet[]
}
