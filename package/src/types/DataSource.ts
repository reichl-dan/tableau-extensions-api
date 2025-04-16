import type {
  ConnectionSummary,
  DataSourceUnderlyingDataOptions,
  DataTable,
  Field,
  LogicalTable,
  TableSummary,
} from './_types'

/**
 * Represents the data source used by a Worksheet.
 */
export interface DataSource {
  /**
   * The user friendly name of the data source as seen in the UI.
   */
  name: string

  /**
   * Unique string representing this data source.
   */
  id: string

  /**
   * An array of fields associated with this data source.
   */
  fields: Field[]

  /**
   * Last update time of the data source's extract, or undefined if this data source is live.
   */
  extractUpdateTime: string | undefined

  /**
   * True if this data source is an extract, false otherwise.
   */
  isExtract: boolean

  /**
   * True if this data source is published to server, false otherwise. Always undefined prior to Tableau 2021.4.
   * @since 1.7.0 and Tableau 2021.4
   */
  isPublished: boolean | undefined

  /**
   * Gets an array of table summary objects that are currently used in the data source.
   * @returns An array of table summary objects that are currently used in the data source.
   */
  getActiveTablesAsync(): Promise<TableSummary[]>

  /**
   * Gets an array of descriptions of the connections within this data source.
   * @returns An array of descriptions of the connections within this data source.
   */
  getConnectionSummariesAsync(): Promise<ConnectionSummary[]>

  /**
   * Gets the underlying data table for the given logical table id.
   * @param logicalTableId
   * @param options Collection of options to change the behavior of the call.
   * @returns A data table containing the underlying data of the data source.
   * @throws UnsupportedMethodForDataSourceType error if this method is called on a Cube DataSource or GA.
   * @deprecated since version 1.4.0. Use DataSource.getLogicalTablesAsync.
   */
  getLogicalTableDataAsync(
    logicalTableId: string,
    options?: DataSourceUnderlyingDataOptions,
  ): Promise<DataTable>

  /**
   * Gets the underlying logical tables used in the data source.
   * @returns An array of logical tables that are currently used in the data source.
   * @since 1.4.0
   */
  getLogicalTablesAsync(): Promise<LogicalTable[]>

  /**
   * Gets the underlying data for this data source
   * @param options Collection of options to change the behavior of the call.
   * @returns A data table containing the underlying data of the data source.
   * @deprecated Use DataSource.getLogicalTableDataReaderAsync or DataSource.getLogicalTableDataAsync.
   */
  getUnderlyingDataAsync(options?: DataSourceUnderlyingDataOptions): Promise<DataTable>

  /**
   * Refreshes the data source.
   * This call has the same functionality as clicking the Refresh option on a data source in Tableau. This does not refresh an extract.
   * @returns Promise that resolves when the data source has finished refreshing.
   */
  refreshAsync(): Promise<void>
}
