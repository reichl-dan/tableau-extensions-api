import type * as Enums from '../enums/_enums'
import type {
  Annotation,
  Dashboard,
  DataSource,
  DataTable,
  DataTableReader,
  Filter,
  GetSummaryDataOptions,
  GetUnderlyingDataOptions,
  LogicalTable,
  MarkInfo,
  Sheet,
  VisualSpecification,
  WorksheetFormatting,
} from './_types'

/**
 * Represents a worksheet in Tableau.
 */
export interface Worksheet extends Sheet {
  /**
   * The dashboard object to which this worksheet belongs.
   */
  parentDashboard: Dashboard

  /**
   * The background color of the worksheet.
   */
  backgroundColor: string

  /**
   * Worksheet level formatting.
   */
  formatting: WorksheetFormatting

  /**
   * Gets the annotations on the worksheet.
   */
  getAnnotationsAsync(): Promise<Annotation[]>

  /**
   * Adds an annotation to a mark in the viz.
   */
  annotateMarkAsync(info: MarkInfo): Promise<void>

  /**
   * Removes the specified annotation from the worksheet.
   */
  removeAnnotationAsync(annotationId: string): Promise<void>

  /**
   * Gets the data sources for this worksheet.
   * Note that calling this method might negatively impact performance and responsiveness
   * of the viz that your extension is added to. The method is not entirely asynchronous
   * and includes some serial operations.
   */
  getDataSourcesAsync(): Promise<DataSource[]>

  /**
   * Gets the list of filters on a worksheet. Hierarchical filters are not yet supported.
   */
  getFiltersAsync(): Promise<Filter[]>

  /**
   * Gets the data for the marks which are currently highlighted on the worksheet.
   * If there are no marks currently highlighted, an empty model is returned.
   */
  getHighlightedMarksAsync(): Promise<MarkInfo>

  /**
   * Gets the data for the marks which are currently selected on the worksheet.
   * If there are no marks currently selected, an empty model is returned.
   */
  getSelectedMarksAsync(): Promise<MarkInfo>

  /**
   * Gets the columns that are returned with getSummaryDataAsync.
   * @since 1.5.0
   */
  getSummaryColumnsInfoAsync(): Promise<unknown[]>

  /**
   * Gets the summary data table for this worksheet.
   * @deprecated Use Worksheet.getSummaryDataReaderAsync.
   */
  getSummaryDataAsync(options?: GetSummaryDataOptions): Promise<DataTable>

  /**
   * Gets a data table reader to access the summary data for the worksheet.
   */
  getSummaryDataReaderAsync(
    pageRowCount?: number,
    options?: GetSummaryDataOptions,
  ): Promise<DataTableReader>

  /**
   * Gets the underlying data table for this worksheet.
   * @deprecated Use Worksheet.getUnderlyingTableDataReaderAsync or Worksheet.getUnderlyingTableDataAsync.
   */
  getUnderlyingDataAsync(options?: GetUnderlyingDataOptions): Promise<DataTable>

  /**
   * Gets the underlying data table for the given logical table id.
   */
  getUnderlyingTableDataAsync(
    logicalTableId: string,
    options?: GetUnderlyingDataOptions,
  ): Promise<DataTable>

  /**
   * Gets a underlying data table reader for the given logical table id.
   */
  getUnderlyingTableDataReaderAsync(
    logicalTableId: string,
    pageRowCount?: number,
    options?: GetUnderlyingDataOptions,
  ): Promise<DataTableReader>

  /**
   * Gets an array of logical tables corresponding to the measures referenced by the worksheet.
   */
  getUnderlyingTablesAsync(): Promise<LogicalTable[]>

  /**
   * Gets the visual specification for the worksheet.
   */
  getVisualSpecificationAsync(): Promise<VisualSpecification>

  /**
   * Gets the tooltip text for the currently hovered mark.
   */
  getTooltipTextAsync(): Promise<string>

  /**
   * Updates the hover state of a tuple in the viz.
   */
  hoverTupleAsync(fieldValuesMap: Map<string, unknown>): Promise<void>

  /**
   * Leaves hover navigation mode in viz.
   */
  leaveMarkNavigationAsync(): Promise<void>

  /**
   * Selects tuples in viz by their values.
   */
  selectTuplesAsync(fieldValuesMap: Map<string, unknown>): Promise<void>

  /**
   * Clears all marks selected in the worksheet.
   */
  clearSelectedMarksAsync(): Promise<void>

  /**
   * Selects the marks that have the specified values for the given field names.
   */
  selectMarksByValueAsync(options: {
    [key: string]: unknown[]
  }): Promise<void>

  /**
   * Applies a categorical filter to the worksheet.
   */
  applyFilterAsync(
    fieldName: string,
    values: unknown[],
    updateType: Enums.FilterUpdateType,
  ): Promise<void>

  /**
   * Applies a hierarchical filter to the worksheet.
   */
  applyHierarchicalFilterAsync(
    fieldName: string,
    values: unknown[],
    updateType: Enums.FilterUpdateType,
  ): Promise<void>

  /**
   * Applies a range filter to the worksheet.
   */
  applyRangeFilterAsync(
    fieldName: string,
    options: {
      min: unknown
      max: unknown
      nullOption: Enums.FilterNullOption
    },
  ): Promise<void>

  /**
   * Applies a relative date filter to the worksheet.
   */
  applyRelativeDateFilterAsync(
    fieldName: string,
    options: {
      periodType: Enums.PeriodType
      rangeType: Enums.DateRangeType
      rangeN: number
      anchorDate?: Date
    },
  ): Promise<void>

  /**
   * Clears the filter for the given field name.
   */
  clearFilterAsync(fieldName: string): Promise<void>
}
