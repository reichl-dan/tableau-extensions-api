import type * as Enums from '../enums/_enums'
import type { TableauEventHandlerFn, TableauEventUnregisterFn } from './_types'

/**
 * Interface for handling registering and unregistering event listeners. Different objects will implement this interface to manage their event handling.
 */
export interface EventListenerManager {
  /**
   * Adds a new event listener to the object. If this object does not support the specified eventType, the method throws an exception.
   * @param eventType The type of event to register for. The type of event is a TableauEventType enumeration.
   * @param handler The function which will be called when an event happens.
   * @returns A helper function which can be called to remove this registration.
   */
  addEventListener(
    eventType: Enums.TableauEventType,
    handler: TableauEventHandlerFn,
  ): TableauEventUnregisterFn

  /**
   * Removes an event listener if a matching one is found. If no matching listener exists, the method does nothing.
   * @param eventType The type of event to register for
   * @param handler The handler function specified in the call to the addEventListener method
   * @returns Whether or not an event listener was removed
   */
  removeEventListener(
    eventType: Enums.TableauEventType,
    handler: TableauEventHandlerFn,
  ): boolean
}
