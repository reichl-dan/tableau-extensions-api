import type * as Enums from '../enums/_enums'

/**
 * Options for Range Filter
 */
export interface RangeFilterOptions {
  /**
   * The minimum value for the range filter
   */
  min?: number | Date

  /**
   * The maximum value for the range filter
   */
  max?: number | Date

  /**
   * The null option setting for the filter
   */
  nullOption?: Enums.FilterNullOption
}
