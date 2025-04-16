import type { Column, DataValue, MarkInfo } from './_types'

/**
 * Represents a data table in Tableau containing columns and data values
 */
export interface DataTable {
  /**
   * Either "Underlying Data Table" or "Summary Data Table".
   */
  name: string

  /**
   * The column information, including the name, data type, and index.
   */
  columns: Column[]

  /**
   * A two-dimensional array of data without the sheet or column metadata.
   * The first array index is the row index and the second array index is the column index.
   */
  data: DataValue[][]

  /**
   * An array of information about marks. Each mark in the array corresponds to a row in the data of this DataTable.
   * MarkInfo is currently only partially available within results from getSelectedMarksAsync / getMarksAsync.
   */
  marksInfo?: MarkInfo[]

  /**
   * The number of rows in the returned data.
   */
  totalRowCount: number

  /**
   * Whether the data is summary data or underlying data. Returns true for summary data.
   */
  isSummaryData?: boolean

  /**
   * True if the rows returned have been limited to the maximum number of retrievable rows.
   * A value of true indicates that the caller requested more rows than the limit and the underlying
   * data source contains more rows than can be returned.
   */
  isTotalRowCountLimited?: boolean
}
