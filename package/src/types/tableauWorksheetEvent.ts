import type { TableauSheetEvent } from './tableauSheetEvent'
import type { Worksheet } from './worksheet'

/**
 * An event which is related to a particular Worksheet in the workbook.
 */
export interface TableauWorksheetEvent extends TableauSheetEvent {
  /**
   * The worksheet which was the source of this event.
   */
  worksheet: Worksheet
}
