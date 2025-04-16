import type { Sheet } from './sheet'
import type { TableauEvent } from './tableauEvent'

/**
 * An event which is related to a particular Sheet (worksheet, dashboard, story) in the workbook.
 */
export interface TableauSheetEvent extends TableauEvent {
  /**
   * The sheet which was the source of this event.
   */
  sheet: Sheet
}
