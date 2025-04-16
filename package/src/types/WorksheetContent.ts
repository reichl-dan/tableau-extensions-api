import type { Worksheet } from './_types'

/**
 * The WorksheetContent namespace is the namespace associated with Viz Extensions.
 * The WorksheetContent namespace contains the Worksheet interface.
 * Use the Worksheet Interface to access worksheet objects and to add or remove event listeners.
 * @since 1.12.0 and Tableau 2024.2
 */
export interface WorksheetContent {
  /**
   * The worksheet object representing the Tableau worksheet where the extension is running.
   */
  worksheet: Worksheet
}
