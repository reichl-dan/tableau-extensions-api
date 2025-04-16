import type { Dashboard } from './_types'

/**
 * The DashboardContent namespace is the namespace associated with Dashboard Extensions.
 * The DashboardContent namespace contains the Dashboard interface. Use the Dashboard
 * Interface to access dashboard objects, worksheets, and parameters, and to add or
 * remove event listeners.
 */
export interface DashboardContent {
  /**
   * The dashboard object representing the Tableau dashboard where the extension is running.
   */
  dashboard: Dashboard
}
