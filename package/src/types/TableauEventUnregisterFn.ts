/**
 * Function which can be invoked to remove an event handler registration. This will be
 * returned when registering an event and makes unregistering simpler.
 * @returns Whether or not the unregistration was successful.
 */
export type TableauEventUnregisterFn = () => boolean
