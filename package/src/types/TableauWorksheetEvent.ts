import type { TableauSheetEvent, Worksheet } from './_types'

/**
 * An event which is related to a particular Worksheet in the workbook.
 */
export interface TableauWorksheetEvent extends TableauSheetEvent {
  /**
   * The worksheet which was the source of this event.
   */
  worksheet: Worksheet
}
