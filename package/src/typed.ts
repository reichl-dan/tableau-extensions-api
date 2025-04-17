import type * as Types from '@tableau/extensions-api-types'
export * from '@tableau/extensions-api-types'

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
   * @category Dashboard Extensions
   */
  DashboardLayoutChanged = 'dashboard-layout-changed',
  /**
   * The workbook formatting has changed
   * @category Dashboard Extensions
   */
  WorkbookFormattingChanged = 'workbook-formatting-changed',
  /**
   * The worksheet formatting has changed
   * @category Viz Extensions
   */
  WorksheetFormattingChanged = 'worksheet-formatting-changed',
}

/**
 * The `WorksheetContent` namespace is the namespace associated with Viz Extensions.
 * The `WorksheetContent` namespace contains the `Worksheet` interface. Use the [Worksheet Interface](./worksheet.html) to
 * access worksheet objects and to add or remove event listeners.
 * @category Viz Extensions
 * @since 1.12.0 and Tableau 2024.2
 */
export interface WorksheetContent {
  /**
   * @returns  The worksheet object representing the Tableau
   *           worksheet where the extension is running.
   */
  readonly worksheet: Types.Worksheet
}
