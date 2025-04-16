import type { TableauWorksheetEvent, WorksheetFormatting } from './_types'

/**
 * An event raised when the worksheet's formatting changes. Note that this event is also raised when the workbook's formatting changes.
 * @since 1.13 and Tableau 2025.1
 */
export interface WorksheetFormattingChangedEvent extends TableauWorksheetEvent {
  /**
   * The new formatting
   */
  formatting: WorksheetFormatting
}
