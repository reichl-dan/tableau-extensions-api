import type * as Enums from '../enums/_enums'

/**
 * Options for Relative Date Filter
 * @since version 1.9.0 and Tableau 2022.2
 */
export interface RelativeDateFilterOptions {
  /**
   * The anchor date of the filter
   */
  anchorDate?: Date

  /**
   * The date period of the filter (years, months, etc.).
   */
  periodType: Enums.PeriodType

  /**
   * When getRange returns LASTN or NEXTN, this is the N value (how many years, months, etc.).
   */
  rangeN?: number

  /**
   * The range of the date filter.
   */
  rangeType: Enums.DateRangeType
}
