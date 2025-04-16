import type { TableauWorksheetEvent } from './tableauWorksheetEvent'
import type { Filter } from './filter'

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
