import type { DashboardLayoutChangeDetails, TableauEvent } from './_types'

/**
 * An event which is raised when the dashboard objects are modified. Should be listened for directly from the
 * tableau.extensions.dashboardContent.dashboard object.
 * @since 1.7.0 and Tableau 2021.4
 */
export interface DashboardLayoutChangedEvent extends TableauEvent {
  /**
   * A map of dashboard object id's to an array of dashboard object layout changes
   */
  dashboardLayoutChangeDetails: DashboardLayoutChangeDetails
}
