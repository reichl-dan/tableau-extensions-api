import type { TableauEvent } from './tableauEvent'

/**
 * Callback function which will be invoked when an event notification is emitted.
 * @param event Class representing the event which occurred.
 */
export type TableauEventHandlerFn = (event: TableauEvent) => void
