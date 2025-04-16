import type * as Enums from '../enums/_enums'
import type {
  DashboardObject,
  DashboardObjectPositionAndSizeUpdateArray,
  DashboardObjectVisibilityMap,
  Filter,
  Sheet,
  Worksheet,
} from './_types'

/**
 * Represents a dashboard in Tableau.
 */
export interface Dashboard extends Sheet {
  /**
   * The name of the active dashboard.
   */
  activeDashboardName: string

  /**
   * The ID of the active object in the dashboard.
   */
  activeDashboardObjectId: number

  /**
   * The collection of objects contained in the dashboard.
   */
  objects: DashboardObject[]

  /**
   * The collection of worksheets contained in the dashboard.
   * This is a helper method and is equivalent to looping through all of the objects in a dashboard and collecting all of the objects whose type is worksheet.
   * You can use this property to iterate through all of the worksheets in the dashboard.
   */
  worksheets: Worksheet[]

  /**
   * Gets the dashboard object with the specified ID.
   * @param dashboardObjectId The id of an object on the dashboard.
   * @returns The dashboard object with that id. Returns undefined if the dashboard object is not found.
   */
  getDashboardObjectById(dashboardObjectId: number): DashboardObject | undefined

  /**
   * Gets all the filters used by the dashboard.
   * @returns The collection of filters used on the dashboard
   */
  getFiltersAsync(): Promise<Filter[]>

  /**
   * Moves and resizes dashboard objects.
   * @param dashboardObjectPositionAndSizeUpdateArray Array of position and size updates for dashboard objects
   */
  moveAndResizeDashboardObjectsAsync(
    dashboardObjectPositionAndSizeUpdateArray: DashboardObjectPositionAndSizeUpdateArray,
  ): Promise<void>

  /**
   * Sets the visibility of one or more dashboard objects.
   * @param dashboardObjectVisibilityMap A map of dashboard object ids to its desired state of visibility.
   * @returns Empty promise that resolves when the visibility has been changed.
   */
  setDashboardObjectVisibilityAsync(
    dashboardObjectVisibilityMap: DashboardObjectVisibilityMap,
  ): Promise<void>

  /**
   * Replays the last animation that occurred on the dashboard.
   * @param replaySpeed The speed at which to replay the animation
   * @returns Empty promise that resolves when the animation has been replayed.
   */
  replayAnimationAsync(replaySpeed: Enums.ReplaySpeedType): Promise<void>
}
