/**
 * Represents the type of aggregation that can be applied to a field.
 */
export enum FieldAggregationType {
  /**
   * Sum aggregation
   */
  Sum = 'sum',
  /**
   * Average aggregation
   */
  Avg = 'avg',
  /**
   * Minimum value aggregation
   */
  Min = 'min',
  /**
   * Maximum value aggregation
   */
  Max = 'max',
  /**
   * Standard deviation aggregation
   */
  Stdev = 'stdev',
  /**
   * Population standard deviation aggregation
   */
  Stdevp = 'stdevp',
  /**
   * Variance aggregation
   */
  Var = 'var',
  /**
   * Population variance aggregation
   */
  Varp = 'varp',
  /**
   * Count aggregation
   */
  Count = 'count',
  /**
   * Count distinct aggregation
   */
  Countd = 'countd',
  /**
   * Median aggregation
   */
  Median = 'median',
  /**
   * Attribute aggregation
   */
  Attr = 'attr',
  /**
   * No aggregation
   */
  None = 'none',
  /**
   * Percentile aggregation
   */
  Percentile = 'percentile',
  /**
   * Year truncation
   */
  TruncYear = 'trunc-year',
  /**
   * Quarter truncation
   */
  TruncQtr = 'trunc-qtr',
  /**
   * Month truncation
   */
  TruncMonth = 'trunc-month',
  /**
   * Week truncation
   */
  TruncWeek = 'trunc-week',
  /**
   * Day truncation
   */
  TruncDay = 'trunc-day',
  /**
   * Hour truncation
   */
  TruncHour = 'trunc-hour',
  /**
   * Minute truncation
   */
  TruncMinute = 'trunc-minute',
  /**
   * Second truncation
   */
  TruncSecond = 'trunc-second',
  /**
   * First quartile
   */
  Quart1 = 'quart1',
  /**
   * Third quartile
   */
  Quart3 = 'quart3',
  /**
   * Skewness
   */
  Skewness = 'skewness',
  /**
   * Kurtosis
   */
  Kurtosis = 'kurtosis',
  /**
   * In/Out
   */
  InOut = 'inout',
  /**
   * Sum of squares
   */
  SumXsqr = 'sum-xsqr',
  /**
   * User-defined aggregation
   */
  User = 'user',
}
