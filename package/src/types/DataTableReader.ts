import type { DataTable } from './_types'

/**
 * A DataTableReader allows iteration over summary or underlying data by pages. The page size is established when the DataTableReader is created.
 * (See getLogicalTableDataReaderAsync, getSummaryDataReaderAsync, or getUnderlyingTableDataReaderAsync.)
 *
 * Notes for usage of a DataTableReader:
 * 1. Since DataTableReaders consume server resources, an inactive DataTableReader will be automatically released after 60 minutes of inactivity. (A new DataTableReader can be created at that time, if needed.)
 * 2. Calling getPageAsync() after an explicit or automatic releaseAsync() will throw an exception.
 * 3. Only one active DataTableReader per logical table id is supported.
 * 4. There are still limits on the number of rows supported for underlying and logical data table readers.
 *
 * @since 1.10.0 and Tableau 2022.4
 */
export interface DataTableReader {
  /**
   * The number of pages in the full data table. The last page could be a partial page.
   */
  pageCount: number

  /**
   * The number of rows in the full data table.
   */
  totalRowCount: number

  /**
   * Get all the pages of data into a single DataTable. Calls to getAllPagesAsync() after releaseAsync() will throw an exception.
   * To protect against possible browser failure, getAllPagesAsync will cap the data at a maximum of 400 pages.
   * With a default pageRowCount of 10,000 this will give you a maximum of 4,000,000 rows of data.
   * If sizes are larger than this, please process your data in page size chunks.
   *
   * @param maxRows - Limits the request to maxRows. If maxRows === 0, requests all rows.
   * @returns A DataTable containing all the data available to the DataTableReader with the maximum page count above.
   */
  getAllPagesAsync(maxRows?: number): Promise<DataTable>

  /**
   * Get a page of data. The page is returned as a DataTable.
   * Calls to getPageAsync() after releaseAsync() will throw an exception.
   *
   * @param pageNumber - The page number (zero-indexed) to fetch. The page number should be treated like an array index with range: 0 <= pageNumber < pageCount.
   * @returns A DataTable containing the requested page. The number of rows returned can be less than the page size at the end of the data.
   */
  getPageAsync(pageNumber: number): Promise<DataTable>

  /**
   * Release all resources held by the DataTableReader.
   * Calling this when done with the DataTableReader is required practice as it frees up resources.
   * Calls to getPageAsync() after releaseAsync() will throw an exception.
   */
  releaseAsync(): Promise<void>
}
