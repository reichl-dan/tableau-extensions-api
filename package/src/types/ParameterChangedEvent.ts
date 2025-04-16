import type { Parameter, TableauEvent } from './_types'

/**
 * An event which is raised when the value of a parameter changes.
 */
export interface ParameterChangedEvent extends TableauEvent {
  /**
   * Gets the parameter that was changed.
   */
  getParameterAsync(): Promise<Parameter>
}
