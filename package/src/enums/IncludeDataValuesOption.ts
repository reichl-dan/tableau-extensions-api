/**
 * Enum that serves as a filter on the DataValues returned from getSummaryDataReaderAsync,
 * getUnderlyingTableDataReaderAsync and getLogicalTableDataReaderAsync.
 */
export enum IncludeDataValuesOption {
  /**
   * DataValues will include all properties.
   */
  AllValues = 'all-values',
  /**
   * DataValues will only include formattedValue properties.
   */
  OnlyFormattedValues = 'only-formatted-values',
  /**
   * DataValues will only include value and nativeValue properties.
   */
  OnlyNativeValues = 'only-native-values',
}
