import type * as Enums from '../enums/_enums'

/**
 * Options argument for the Worksheet.GetSummaryDataAsync API
 */
export interface GetSummaryDataOptions {
  /**
   * Specifies whether to apply worksheet level formatting to numbers and dates. Note that this is different from the global field formatting defined in the Schema Viewer
   * @since 1.13.0 and Tableau 2025.1
   */
  applyWorksheetFormatting?: boolean

  /**
   * The columns to return specified by field id, returns all by default. Since 1.5.0, fieldId is a property of the Column object.
   * @since 1.5.0
   */
  columnsToIncludeById?: string[]

  /**
   * Do not use aliases specified in the data source in Tableau. Default is false.
   */
  ignoreAliases?: boolean

  /**
   * Only return data for the currently selected marks. Default is false.
   */
  ignoreSelection?: boolean

  /**
   * Specify which properties to return in DataValues. The default is IncludeDataValuesOption.AllValues. All properties not requested will be undefined in the DataValue results. This is a performance optimization only, and will be ignored in Tableau versions prior to 2021.2.
   * @since 1.5.0
   */
  includeDataValuesOption?: Enums.IncludeDataValuesOption

  /**
   * The number of rows of data that you want to return. A value of 0 will attempt to return all rows. 0 is the default if maxRows is not specified.
   * getSummaryDataAsync - maximum number of rows returned is not capped, but performance may suffer with large row counts.
   * @since 1.5.0 maxRows is now supported in both GetSummaryDataOptions and GetUnderlyingDataOptions.
   * @since 1.10.0 maxRows is ignored when getting a DataTableReader
   */
  maxRows?: number
}
