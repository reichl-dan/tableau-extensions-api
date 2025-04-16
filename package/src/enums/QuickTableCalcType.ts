/**
 * Represents the different types of quick table calculations available in Tableau.
 */
export enum QuickTableCalcType {
  RunningTotal = 'running-total',
  Difference = 'difference',
  PercentDifference = 'percent-difference',
  PercentageOfTotal = 'percentage-of-total',
  Rank = 'rank',
  Percentile = 'percentile',
  MovingAverage = 'moving-average',
  YTDTotal = 'ytd-total',
  CompoundGrowthRate = 'compound-growth-rate',
  YTDGrowth = 'ytd-growth',
  Undefined = 'undefined',
}
