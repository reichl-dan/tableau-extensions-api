import type { Filter, TableauWorksheetEvent } from './_types'

export interface FilterChangedEvent extends TableauWorksheetEvent {
  /**
   * The name of the field being filtered.
   */
  fieldName: string

  /**
   * Gets the Filter object associated with the event.
   * @returns The Filter object associated with the event.
   */
  getFilterAsync(): Promise<Filter>
}
