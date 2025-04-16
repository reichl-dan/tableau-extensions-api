import type { GetSummaryDataOptions } from './getSummaryDataOptions'

/**
 * Options argument for the Worksheet.getUnderlyingTableDataAsync API.
 */
export interface GetUnderlyingDataOptions extends GetSummaryDataOptions {
  /**
   * Return all the columns for the data source. Default is false.
   */
  includeAllColumns?: boolean
}
