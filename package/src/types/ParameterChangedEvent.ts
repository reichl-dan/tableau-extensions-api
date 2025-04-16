import type { Parameter } from './parameter'
import type { TableauEvent } from './tableauEvent'

/**
 * An event which is raised when the value of a parameter changes.
 */
export interface ParameterChangedEvent extends TableauEvent {
  /**
   * Gets the parameter that was changed.
   */
  getParameterAsync(): Promise<Parameter>
}
