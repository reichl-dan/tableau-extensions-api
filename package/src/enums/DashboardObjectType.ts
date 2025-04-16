/**
 * Represents what the object represents in a dashboard.
 */
export enum DashboardObjectType {
  /**
   * A blank zone in the dashboard
   */
  Blank = 'blank',
  /**
   * A dashboard extension zone
   */
  Extension = 'extension',
  /**
   * An image zone
   */
  Image = 'image',
  /**
   * A legend zone
   */
  Legend = 'legend',
  /**
   * A page filter zone
   */
  PageFilter = 'page-filter',
  /**
   * A parameter control zone
   */
  ParameterControl = 'parameter-control',
  /**
   * A quick filter zone
   */
  QuickFilter = 'quick-filter',
  /**
   * A text zone
   */
  Text = 'text',
  /**
   * A title zone
   */
  Title = 'title',
  /**
   * A web page zone
   */
  WebPage = 'web-page',
  /**
   * A worksheet zone
   */
  Worksheet = 'worksheet',
}
