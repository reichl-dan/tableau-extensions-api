/**
 * An object to specify a dashboard object and its new position and size in a dashboard.
 */
export interface DashboardObjectPositionAndSizeUpdate {
  /**
   * The dashboard object ID
   */
  dashboardObjectId: number

  /**
   * The width
   */
  width: number

  /**
   * The height
   */
  height: number

  /**
   * X coordinate
   */
  x: number

  /**
   * Y coordinate
   */
  y: number
}
