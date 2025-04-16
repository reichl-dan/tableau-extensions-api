/**
 * Represents the different types of filters available in Tableau.
 */
export enum FilterType {
  /**
   * Categorical filter type
   */
  Categorical = 'categorical',
  /**
   * Hierarchical filter type
   */
  Hierarchical = 'hierarchical',
  /**
   * Quantitative filter type
   */
  Quantitative = 'quantitative',
  /**
   * Relative date filter type
   */
  RelativeDate = 'relative-date',
}
