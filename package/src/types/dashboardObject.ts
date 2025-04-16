import type * as Enums from '../enums/_enums'
import type { Dashboard } from './dashboard'
import type { Point } from './point'
import type { Size } from './size'
import type { Worksheet } from './worksheet'

/**
 * An object of a dashboard.
 */
export interface DashboardObject {
  /** The Dashboard object that contains this object. */
  dashboard: Dashboard

  /** The field id of the dashboard object if it is a QuickFilter */
  fieldId?: string

  /** The id of the dashboard object */
  id: number

  /** True if the object is floating in the dashboard. */
  isFloating: boolean

  /** True if the object is visible. */
  isVisible: boolean

  /** The name of the dashboard object. This is the name given to the object during authoring. */
  name: string

  /** The coordinates relative to the top-left corner of the dashboard containing this object. */
  position: Point

  /** The size of the object. */
  size: Size

  /** What the object represents. */
  type: Enums.DashboardObjectType

  /** If type returns WORKSHEET or QUICKFILTER, this returns a Worksheet object, undefined otherwise. */
  worksheet?: Worksheet
}
