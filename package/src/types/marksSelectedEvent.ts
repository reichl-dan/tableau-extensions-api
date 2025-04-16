import type { TableauWorksheetEvent } from './tableauWorksheetEvent'
import type { MarksCollection } from './marksCollection'

/**
 * An event which is raised when marks are selected on a worksheet.
 */
export interface MarksSelectedEvent extends TableauWorksheetEvent {
  /**
   * Gets the collection of marks that were selected.
   * @returns The collection of Marks that were selected.
   */
  getMarksAsync(): Promise<MarksCollection>
}
