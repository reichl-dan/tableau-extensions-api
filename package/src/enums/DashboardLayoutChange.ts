/**
 * Enum that represents the changes that occur to a dashboard object.
 */
export enum DashboardLayoutChange {
  /**
   * A dashboard object was added
   */
  Added = 'added',
  /**
   * Navigate to another dashboard
   */
  DashboardChanged = 'dashboard-changed',
  /**
   * A dashboard object is deselected
   */
  Deselected = 'deselected',
  /**
   * A dashboard object's floating state changed
   */
  IsFloatingChanged = 'is-floating-changed',
  /**
   * A dashboard object's visibility changed
   */
  IsVisibleChanged = 'is-visible-changed',
  /**
   * A dashboard object was renamed
   */
  NameChanged = 'name-changed',
  /**
   * A dashboard object's position changed
   */
  PositionChanged = 'position-changed',
  /**
   * A dashboard object was removed
   */
  Removed = 'removed',
  /**
   * A dashboard object is selected
   */
  Selected = 'selected',
  /**
   * A dashboard object's size changed
   */
  SizeChanged = 'size-changed',
}
