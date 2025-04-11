import type {
  AnalyticsObjectType,
  AnnotationType,
  ClassNameKey,
  ColumnType,
  DataType,
  DateRangeType,
  DashboardObjectType,
  DashboardObjectVisibilityType,
  DialogStyle,
  EncodingType,
  ErrorCodes,
  ExtensionContext,
  ExtensionMode,
  FieldAggregationType,
  FieldRoleType,
  FilterDomainType,
  FilterNullOption,
  FilterType,
  FilterUpdateType,
  HierarchicalLevelSelectionState,
  IncludeDataValuesOption,
  MarkType,
  ParameterValueType,
  PeriodType,
  QuickTableCalcType,
  ReplaySpeedType,
  SelectionUpdateType,
  SelectOptions,
  SheetType,
  SortDirection,
  TableauEventType,
  TrendLineModelType,
  VizImageEncodingType,
  VizImagePaletteType,
  VizImageSizeSettingType,
  VizImageSizeSettingAlignmentType,
  VizImageSortDirectionType,
  ZoneVisibilityType
} from './enums'

// -------------------------------------------------------------------------
// Data Types (from data.d.ts)
// -------------------------------------------------------------------------

export interface Settings {
  get(key: string): string | undefined
}

export interface DataTable {
  /** The columns in the data table */
  columns: DataColumn[]
  /** The data rows */
  data: DataRow[]
  /** Total number of rows in the table */
  totalRowCount: number
  /** Information about marks if this is marks data */
  marksInfo?: MarkInfo[]
}

export interface DataTableReader {
  /** The total number of pages available */
  pageCount: number
  /** Gets a specific page of data */
  getPageAsync(pageNumber: number): Promise<DataTable>
  /** Releases resources associated with this reader */
  releaseAsync(): Promise<void>
}

export interface DataColumn {
  /** The field name */
  fieldName: string
  /** The data type of values in this column */
  dataType: DataType
  /** The index of this column */
  index: number
}

export interface DataRow {
  /** The values in this row */
  data: unknown[]
}

export interface Field {
  /** The name of the field */
  name: string
  /** The role of the field (dimension or measure) */
  role: FieldRoleType
  /** The aggregation type if applicable */
  aggregation?: FieldAggregationType
}

export interface DataValue {
  /** The value */
  value: unknown
  /** The formatted value */
  formattedValue: string
}

export interface LogicalTable {
  /** The ID of the logical table */
  id: string
  /** The caption of the logical table */
  caption: string
}

export interface MarkInfo {
  /** The type of mark */
  type: MarkType
  /** The color of the mark */
  color?: string
  /** The tuple ID that can be used to select this mark */
  tupleId: number
  /** The values associated with this mark */
  pairs?: Array<{
    fieldName: string
    value: unknown
  }>
}

export interface Parameter {
  /** The name of the parameter */
  name: string
  /** The current value of the parameter */
  currentValue: DataValue
  /** The data type of the parameter */
  dataType: ParameterValueType
  /** Whether the parameter allows multiple values */
  allowableValues: ParameterDomainRestriction
}

export interface ParameterDomainRestriction {
  /** The type of restriction */
  type: 'all' | 'list' | 'range'
  /** The list of allowable values if type is "list" */
  allowableValues?: DataValue[]
  /** The min value if type is "range" */
  minValue?: DataValue
  /** The max value if type is "range" */
  maxValue?: DataValue
  /** The step size if type is "range" */
  stepSize?: number
}

export interface GetUnderlyingDataOptions {
  /** Maximum number of rows to return */
  maxRows?: number
  /** Whether to ignore selection and return all rows */
  ignoreSelection?: boolean
  /** Whether to include all columns */
  includeAllColumns?: boolean
}

export interface GetSummaryDataOptions {
  /** Maximum number of rows to return */
  maxRows?: number
  /** Whether to ignore selection and return all rows */
  ignoreSelection?: boolean
}

export interface DataSource {
  /** The name of the data source */
  name: string
  /** The ID of the data source */
  id: string
  /** The fields in the data source */
  fields: Field[]
  /** Gets the underlying data for the data source */
  getUnderlyingDataAsync(options?: GetUnderlyingDataOptions): Promise<DataTable>
  /** Gets a data table reader for accessing the underlying data */
  getUnderlyingTableDataReaderAsync(
    logicalTableId: string,
    options?: GetUnderlyingDataOptions,
  ): Promise<DataTableReader>
  /** Gets the logical tables used by the data source */
  getLogicalTablesAsync(): Promise<LogicalTable[]>
}

export interface Workbook {
  /**
   * Gets the data sources for this workbook. Note that calling this method might
   * negatively impact performance and responsiveness of the viz that your extension is
   * added to. The method is not entirely asynchronous and includes serial operations.
   */
  getAllDataSourcesAsync(): Promise<DataSource[]>
}

// -------------------------------------------------------------------------
// Event Types (from events.d.ts)
// -------------------------------------------------------------------------

export interface TableauEvent {
  /** The type of event that was fired */
  type: TableauEventType
}

export interface TableauSheetEvent extends TableauEvent {
  /** The sheet that triggered the event */
  sheet: Sheet
}

export interface TableauWorksheetEvent extends TableauSheetEvent {
  /** The worksheet that triggered the event */
  worksheet: Worksheet
}

export interface FilterChangedEvent extends TableauWorksheetEvent {
  /** The field name of the filter that changed */
  fieldName: string
}

export interface MarkSelectionChangedEvent extends TableauWorksheetEvent {
  /** The selected marks that triggered the event */
  selection: MarksSelection
}

export interface ParameterChangedEvent extends TableauEvent {
  /** The parameter that changed */
  parameter: Parameter
}

export interface SettingsChangedEvent extends TableauEvent {
  /** The settings that were changed */
  newSettings: { [key: string]: string }
}

export interface DashboardLayoutChangedEvent extends TableauSheetEvent {
  /** Details about the layout changes */
  layoutChangeDetails: DashboardLayoutChangeDetails
}

export interface WorksheetFormattingChangedEvent extends TableauWorksheetEvent {
  /** The new formatting settings */
  formatting: WorksheetFormatting
}

export type TableauEventHandlerFn = (event: TableauEvent) => void
export type TableauEventUnregisterFn = () => boolean

export interface EventListenerManager {
  addEventListener(
    eventType: TableauEventType,
    handler: TableauEventHandlerFn,
  ): TableauEventUnregisterFn

  removeEventListener(
    eventType: TableauEventType,
    handler: TableauEventHandlerFn,
  ): boolean
}

export type DashboardLayoutChangeDetails = Map<number, Array<DashboardLayoutChange>>

export interface DashboardLayoutChange {
  type: DashboardLayoutChangeType
  visual: {
    id: number
    dashboardObjectType: DashboardObjectType
  }
}

export enum DashboardLayoutChangeType {
  Size = 'size',
  Position = 'position',
  VisibilityChanged = 'visibility-changed',
  ZOrderChanged = 'zorder-changed',
  FloatingFixedStateChanged = 'floating-fixed-state-changed',
}

export interface MarksSelection {
  /** The selected marks data */
  data: DataTable
  /** Information about the selected marks */
  marksInfo: MarkInfo[]
}

// -------------------------------------------------------------------------
// Worksheet and Dashboard Types (from worksheet.d.ts & dashboard.d.ts)
// -------------------------------------------------------------------------

export interface Point {
  x: number
  y: number
}

export interface Size {
  height: number
  width: number
}

export interface Sheet {
  /** The name of the sheet */
  readonly name: string

  /** The type of sheet */
  readonly sheetType: SheetType

  /** The size of the sheet */
  readonly size: Size

  /**
   * Add an event listener to the sheet
   */
  addEventListener(
    eventType: TableauEventType,
    handler: TableauEventHandlerFn,
  ): TableauEventUnregisterFn

  /**
   * Remove an event listener from the sheet
   */
  removeEventListener(
    eventType: TableauEventType,
    handler: TableauEventHandlerFn,
  ): boolean
}

export interface Dashboard extends Sheet {
  /** The name of the active dashboard */
  readonly activeDashboardName: string

  /** The ID of the active object in the dashboard */
  readonly activeDashboardObjectId: number

  /** The collection of objects in the dashboard */
  readonly objects: DashboardObject[]

  /** The collection of worksheets in the dashboard */
  readonly worksheets: Worksheet[]

  /**
   * Gets a dashboard object by its ID
   */
  getDashboardObjectById(dashboardObjectId: number): DashboardObject | undefined

  /**
   * Sets the visibility of dashboard objects
   */
  setDashboardObjectVisibilityAsync(
    objectVisibilityMap: Map<number, DashboardObjectVisibilityType>,
  ): Promise<void>

  /**
   * Moves and resizes dashboard objects
   */
  moveAndResizeDashboardObjectsAsync(
    dashboardObjectPositionAndSizeUpdateArray: DashboardObjectPositionAndSizeUpdate[],
  ): Promise<void>

  /**
   * @deprecated Use setDashboardObjectVisibilityAsync instead
   */
  setZoneVisibilityAsync(
    zoneVisibilityMap:
      | { [key: number]: ZoneVisibilityType }
      | Map<number, ZoneVisibilityType>,
  ): Promise<void>
}

export interface DashboardObject {
  /** The ID of the dashboard object */
  id: number

  /** The type of dashboard object */
  objectType: DashboardObjectType

  /** The position of the object */
  position?: Point

  /** The size of the object */
  size?: Size

  /** Whether the object is visible */
  isVisible?: boolean

  /** Whether the object is floating */
  isFloating?: boolean

  /** The worksheet if this is a worksheet object */
  worksheet?: Worksheet
}

export interface DashboardObjectPositionAndSizeUpdate {
  /** The ID of the object to update */
  objectId: number

  /** The new position */
  position: Point

  /** The new size */
  size: Size
}

export interface Worksheet extends Sheet {
  /** The parent dashboard (only available for dashboard extensions) */
  readonly parentDashboard?: Dashboard

  /** The background color (only available for viz extensions) */
  readonly backgroundColor?: string

  /** Worksheet level formatting (only available for viz extensions) */
  readonly formatting?: WorksheetFormatting

  /**
   * Gets the summary data for the worksheet
   */
  getSummaryDataAsync(options?: GetSummaryDataOptions): Promise<DataTable>

  /**
   * Gets a data table reader for accessing the summary data
   */
  getSummaryDataReaderAsync(options?: GetSummaryDataOptions): Promise<DataTableReader>

  /**
   * Gets the underlying data for the worksheet
   */
  getUnderlyingDataAsync(options?: GetUnderlyingDataOptions): Promise<DataTable>

  /**
   * Gets a data table reader for accessing the underlying data
   */
  getUnderlyingTableDataReaderAsync(
    logicalTableId: string,
    options?: GetUnderlyingDataOptions,
  ): Promise<DataTableReader>

  /**
   * Gets the logical tables used by the worksheet
   */
  getUnderlyingTablesAsync(): Promise<LogicalTable[]>

  /**
   * Gets the selected marks on the worksheet
   */
  getSelectedMarksAsync(): Promise<MarksCollection>

  /**
   * Gets the highlighted marks on the worksheet
   */
  getHighlightedMarksAsync(): Promise<MarksCollection>

  /**
   * Selects marks by value
   */
  selectMarksByValueAsync(
    selections: SelectionCriteria[],
    selectionUpdateType: SelectionUpdateType,
  ): Promise<void>

  /**
   * Clears all selected marks
   */
  clearSelectedMarksAsync(): Promise<void>

  /**
   * Gets all the filters applied to the worksheet
   */
  getFiltersAsync(): Promise<Filter[]>

  /**
   * Applies a filter to the worksheet
   */
  applyFilterAsync(
    fieldName: string,
    values: unknown[],
    updateType: FilterUpdateType,
    options?: FilterOptions,
  ): Promise<void>

  /**
   * Clears the specified filter
   */
  clearFilterAsync(fieldName: string): Promise<void>
}

export interface WorksheetFormatting {
  /** The background color */
  backgroundColor?: string
  /** The font settings */
  font?: {
    family?: string
    size?: number
    color?: string
  }
}

export interface SelectionCriteria {
  /** The field name to filter on */
  fieldName: string
  /** The value to select */
  value: unknown
}

export interface MarksCollection {
  /** The data in the selection */
  data: DataTable
  /** Information about the selected marks */
  marksInfo: MarkInfo[]
}

export interface Filter {
  /** The field name */
  fieldName: string
  /** The type of filter */
  filterType: FilterType
  /** Whether the filter is applicable */
  isApplied: boolean
  /** The worksheet the filter belongs to */
  worksheet: Worksheet
}

export interface FilterOptions {
  /** Whether to exclude the specified values */
  isExcludeMode?: boolean
  /** Whether to apply to all fields with the same name */
  applyToAllFields?: boolean
}

// Content container interfaces (moving definition only, implementation to extensions.d.ts)
export interface DashboardContent {
  /** The dashboard object */
  dashboard: Dashboard
}

export interface WorksheetContent {
  /** The worksheet object */
  worksheet: Worksheet
}

// Visual Specifications
export interface VisualSpecification {
  // This is a placeholder for the full specification from the docs
  // The actual structure should be based on the Tableau visualization specification
  [key: string]: unknown;
}

export type ContextMenuCallbacks = Record<string, (...args: unknown[]) => unknown>;
