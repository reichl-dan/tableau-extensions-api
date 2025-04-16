import type { TableauEvent, WorkbookFormatting } from './_types'

/**
 * An event which is related to a workbook's formatting (worksheet, dashboard, story) in the workbook.
 */
export interface WorkbookFormattingChangedEvent extends TableauEvent {
  /**
   * The new extension formatting
   */
  formatting: WorkbookFormatting
}
