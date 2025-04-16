import type { TableauEvent } from './_types'

/**
 * An event which is raised when the settings of an extension are updated.
 * Should be listened for directly from the tableau.extensions.settings object.
 */
export interface SettingsChangedEvent extends TableauEvent {
  /**
   * The new settings that were recently saved.
   */
  newSettings: {
    [key: string]: string
  }
}
