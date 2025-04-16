import type * as Enums from '../enums/_enums'

/**
 * Represents a column in a data table
 */
export interface Column {
  /**
   * The data type of the column. Possible values are float, integer, string, boolean, date, datetime and spatial
   */
  dataType: Enums.DataType

  /**
   * The fieldId of the field in the column. In summary data, this includes the aggregation. The fieldId is not stable across replacing data sources. For example after replacing the data source [Clipboard_20210305T164000].[sum:Sales:qk] could become [federated.12usuoq1171o1b1ebdyh60fjnev1].[sum:Sales:qk].
   * @since 1.5.0
   */
  fieldId: string

  /**
   * The name of the field in the column. In summary data, this includes the aggregation. The summary data field name is not stable across languages. For example, in an English version of Tableau, the field name might be SUM(Sales). In French, this would be SOMME(Sales).
   */
  fieldName: string

  /**
   * The number of rows in the returned data.
   */
  index: number

  /**
   * Whether the column data is referenced in the visualization.
   */
  isReferenced: boolean
}
