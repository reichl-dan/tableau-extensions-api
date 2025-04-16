import type * as Enums from '../enums/_enums'

/**
 * An event object represents a notification that some sort of state has changed. This is the base event interface. All events will inherit this type.
 */
export interface TableauEvent {
  /**
   * The type of event that occurred.
   */
  type: Enums.TableauEventType
}
