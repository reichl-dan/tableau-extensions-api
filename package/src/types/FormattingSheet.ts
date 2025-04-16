import type * as Enums from '../enums/_enums'

/**
 * Represents formatting in a workbook for different sheet types.
 * @since 1.7.0 and Tableau 2021.4
 */
export interface FormattingSheet {
  /**
   * Is an object that contains a ClassNameKey which represents a type of formatting in a workbook: WorksheetTitle, Worksheet, Tooltip, StoryTitle, and DashboardTitle.
   */
  classNameKey: Enums.ClassNameKey

  /**
   * The CSS properties for this formatting sheet.
   */
  cssProperties: string
}
