import type * as Enums from '../enums/_enums'
import type { DataValue, Filter } from './_types'

/**
 * Represents a relative date filter in Tableau
 */
export interface RelativeDateFilter extends Filter {
  /**
   * The anchor date of the filter
   */
  anchorDate: DataValue

  /**
   * The date period of the filter.
   */
  periodType: Enums.PeriodType

  /**
   * When getRange returns LASTN or NEXTN, this is the N value (how many years, months, etc.).
   */
  rangeN: number

  /**
   * The range of the date filter (years, months, etc.).
   */
  rangeType: Enums.DateRangeType
}
