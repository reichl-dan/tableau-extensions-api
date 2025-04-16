/**
 * Represents the type of event that can be listened for.
 */
export enum TableauEventType {
  /**
   * Raised when any filter has changed state. You can use this event type with Worksheet objects.
   */
  FilterChanged = 'filter-changed',
  /**
   * The selected marks on a visualization has changed. You can use this event type with Worksheet objects.
   */
  MarkSelectionChanged = 'mark-selection-changed',
  /**
   * A parameter has had its value modified. You can use this event type with Parameter objects.
   */
  ParameterChanged = 'parameter-changed',
  /**
   * Settings have been changed for this extension. You can use this event type with Settings objects.
   */
  SettingsChanged = 'settings-changed',
  /**
   * The summary data backing a worksheet has changed You can use this event type with Worksheet objects.
   */
  SummaryDataChanged = 'summary-data-changed',
  /**
   * The dashboard layout has changed
   */
  DashboardLayoutChanged = 'dashboard-layout-changed',
  /**
   * The workbook formatting has changed
   */
  WorkbookFormattingChanged = 'workbook-formatting-changed',
  /**
   * The worksheet formatting has changed
   */
  WorksheetFormattingChanged = 'worksheet-formatting-changed',
}
