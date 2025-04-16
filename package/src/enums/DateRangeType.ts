/**
 * Valid date ranges for a relative date filter.
 */
export enum DateRangeType {
  /**
   * Refers to the current day, week, month, etc. of the date period.
   */
  Current = 'current',
  /**
   * Refers to the last day, week, month, etc. of the date period.
   */
  Last = 'last',
  /**
   * Refers to the last N days, weeks, months, etc. of the date period.
   */
  LastN = 'last-n',
  /**
   * Refers to the next day, week, month, etc. of the date period.
   */
  Next = 'next',
  /**
   * Refers to the next N days, weeks, months, etc. of the date period.
   */
  NextN = 'next-n',
  /**
   * Refers to everything up to and including the current day, week, month, etc. of the date period.
   */
  ToDate = 'to-date',
}
