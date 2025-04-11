/** @see https://tableau.github.io/extensions-api/api/enums/tableau.analyticsobjecttype.html */
export enum AnalyticsObjectType {
  Cluster = 'cluster',
  Forecast = 'forecast',
  TrendLine = 'trend-line',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.annotationtype.html */
export enum AnnotationType {
  Area = 'area',
  Mark = 'mark',
  Point = 'point',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.classnamekey.html */
export enum ClassNameKey {
  ColumnDivider = 'column-divider',
  ColumnHeader = 'column-header',
  ParameterControl = 'parameter-control',
  RowDivider = 'row-divider',
  RowHeader = 'row-header',
  SheetBackground = 'sheet-background',
  Tooltip = 'tooltip',
  WorksheetFilter = 'worksheet-filter',
  WorksheetQuickFilter = 'worksheet-quick-filter',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.columntype.html */
export enum ColumnType {
  Continuous = 'continuous',
  Discrete = 'discrete',
  Unknown = 'unknown',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.dashboardobjecttype.html */
export enum DashboardObjectType {
  Blank = 'blank',
  Button = 'button',
  Extension = 'extension',
  Image = 'image',
  Text = 'text',
  WebPage = 'web-page',
  Worksheet = 'worksheet',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.dashboardobjectvisibilitytype.html */
export enum DashboardObjectVisibilityType {
  Hide = 'hide',
  Show = 'show',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.datatype.html */
export enum DataType {
  Bool = 'bool',
  Date = 'date',
  DateTime = 'date-time',
  Float = 'float',
  Int = 'int',
  Spatial = 'spatial',
  String = 'string',
  Unknown = 'unknown',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.daterangetype.html */
export enum DateRangeType {
  Current = 'current',
  Last = 'last',
  LastN = 'last-n',
  Next = 'next',
  NextN = 'next-n',
  ToDate = 'to-date',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.dialogstyle.html */
export enum DialogStyle {
  Modal = 'modal',
  Modeless = 'modeless',
  Popup = 'popup',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.encodingtype.html */
export enum EncodingType {
  Angle = 'angle',
  Color = 'color',
  Column = 'column',
  Custom = 'custom',
  Detail = 'detail',
  Filter = 'filter',
  Geometry = 'geometry',
  Label = 'label',
  MarksType = 'marks-type',
  MeasureValues = 'measure-values',
  Page = 'page',
  Path = 'path',
  Row = 'row',
  Shape = 'shape',
  Size = 'size',
  Text = 'text',
  Tooltip = 'tooltip',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.errorcodes.html */
export enum ErrorCodes {
  APINotInitialized = 'api-not-initialized',
  DialogAlreadyOpen = 'dialog-already-open',
  DialogClosedByUser = 'dialog-closed-by-user',
  InternalError = 'internal-error',
  InvalidDomainDialog = 'invalid-dialog-domain',
  InvalidParameter = 'invalid-parameter',
  MissingFilter = 'missing-filter',
  MissingParameter = 'missing-parameter',
  NoGlobalRootElement = 'no-global-root-element',
  ServerError = 'server-error',
  SettingSaveInProgress = 'setting-save-in-progress',
  UnsupportedEventName = 'unsupported-event-name',
  UnsupportedMethodForDataSourceType = 'unsupported-method-for-data-source-type',
  VisibilityError = 'visibility-error',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.extensioncontext.html */
export enum ExtensionContext {
  Desktop = 'desktop',
  Server = 'server',
  Unknown = 'unknown',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.extensionmode.html */
export enum ExtensionMode {
  Authoring = 'authoring',
  Viewing = 'viewing',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.fieldaggregationtype.html */
export enum FieldAggregationType {
  Attr = 'attr',
  Avg = 'avg',
  Count = 'count',
  CountD = 'count-d',
  Day = 'day',
  End = 'end',
  Hour = 'hour',
  InOut = 'in-out',
  Kurtosis = 'kurtosis',
  Max = 'max',
  Mdy = 'mdy',
  Median = 'median',
  Min = 'min',
  Minute = 'minute',
  Month = 'month',
  MonthYear = 'month-year',
  None = 'none',
  Qtr = 'qtr',
  Quart1 = 'quart1',
  Quart3 = 'quart3',
  Second = 'second',
  Skewness = 'skewness',
  Sum = 'sum',
  TruncDay = 'trunc-day',
  TruncHour = 'trunc-hour',
  TruncMinute = 'trunc-minute',
  TruncMonth = 'trunc-month',
  TruncQtr = 'trunc-qtr',
  TruncSecond = 'trunc-second',
  TruncWeek = 'trunc-week',
  TruncYear = 'trunc-year',
  User = 'user',
  Week = 'week',
  Weekday = 'weekday',
  Year = 'year',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.fieldroletype.html */
export enum FieldRoleType {
  Dimension = 'dimension',
  Measure = 'measure',
  Unknown = 'unknown',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.filterdomaintype.html */
export enum FilterDomainType {
  Database = 'database',
  Relevant = 'relevant',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.filternulloption.html */
export enum FilterNullOption {
  AllValues = 'all-values',
  NonNullValues = 'non-null-values',
  NullValues = 'null-values',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.filtertype.html */
export enum FilterType {
  Categorical = 'categorical',
  Hierarchical = 'hierarchical',
  Range = 'range',
  RelativeDate = 'relative-date',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.filterupdatetype.html */
export enum FilterUpdateType {
  Add = 'add',
  All = 'all',
  Remove = 'remove',
  Replace = 'replace',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.hierarchicallevelselectionstate.html */
export enum HierarchicalLevelSelectionState {
  PartiallySelected = 'partially-selected',
  Selected = 'selected',
  Unselected = 'unselected',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.includedatavaluesoption.html */
export enum IncludeDataValuesOption {
  BothFormattedAndNativeValues = 'both-formatted-and-native-values',
  OnlyFormattedValues = 'only-formatted-values',
  OnlyNativeValues = 'only-native-values',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.marktype.html */
export enum MarkType {
  Area = 'area',
  Bar = 'bar',
  Circle = 'circle',
  GanttBar = 'gantt-bar',
  Heatmap = 'heatmap',
  Line = 'line',
  Map = 'map',
  Pie = 'pie',
  Polygon = 'polygon',
  Shape = 'shape',
  Square = 'square',
  Text = 'text',
  VizExtension = 'viz-extension',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.parametervaluetype.html */
export enum ParameterValueType {
  Bool = 'bool',
  Date = 'date',
  DateTime = 'datetime',
  Float = 'float',
  Int = 'int',
  String = 'string',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.periodtype.html */
export enum PeriodType {
  Days = 'days',
  Hours = 'hours',
  Minutes = 'minutes',
  Months = 'months',
  Quarters = 'quarters',
  Seconds = 'seconds',
  Weeks = 'weeks',
  Years = 'years',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.quicktablecalctype.html */
export enum QuickTableCalcType {
  CompoundGrowthRate = 'compound-growth-rate',
  Difference = 'difference',
  MovingAverage = 'moving-average',
  PercentDifference = 'percent-difference',
  PercentOfTotal = 'percent-of-total',
  Percentile = 'percentile',
  Rank = 'rank',
  RunningTotal = 'running-total',
  Undefined = 'undefined',
  YTDGrowth = 'ytd-growth',
  YTDTotal = 'ytd-total',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.replayspeedtype.html */
export enum ReplaySpeedType {
  Fast = 'fast',
  Normal = 'normal',
  Slow = 'slow',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.selectoptions.html */
export enum SelectOptions {
  Deselect = 'deselect',
  Select = 'select',
  Toggle = 'toggle',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.selectionupdatetype.html */
export enum SelectionUpdateType {
  Add = 'add',
  Remove = 'remove',
  Replace = 'replace',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.sheettype.html */
export enum SheetType {
  Dashboard = 'dashboard',
  Story = 'story',
  Worksheet = 'worksheet',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.sortdirection.html */
export enum SortDirection {
  Decreasing = 'decreasing',
  Increasing = 'increasing',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.tableaueventtype.html */
export enum TableauEventType {
  DashboardLayoutChanged = 'dashboard-layout-changed',
  FilterChanged = 'filter-changed',
  MarkSelectionChanged = 'mark-selection-changed',
  ParameterChanged = 'parameter-changed',
  SettingsChanged = 'settings-changed',
  SummaryDataChanged = 'summary-data-changed',
  WorkbookFormattingChanged = 'workbook-formatting-changed',
  WorksheetFormattingChanged = 'worksheet-formatting-changed',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.trendlinemodeltype.html */
export enum TrendLineModelType {
  Exponential = 'exponential',
  Linear = 'linear',
  Logarithmic = 'logarithmic',
  Polynomial = 'polynomial',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.vizimagencodingtype.html */
export enum VizImageEncodingType {
  PNG = 'png',
  SVG = 'svg',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.vizimagepallettetype.html */
export enum VizImagePaletteType {
  Dark = 'dark',
  Light = 'light',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.vizimagesizesettingalignmenttype.html */
export enum VizImageSizeSettingAlignmentType {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Right = 'right',
  Top = 'top',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.vizimagesizesettingtype.html */
export enum VizImageSizeSettingType {
  Automatic = 'automatic',
  Fixed = 'fixed',
}

/** @see https://tableau.github.io/extensions-api/api/enums/tableau.vizimagesortdirectiontype.html */
export enum VizImageSortDirectionType {
  Ascending = 'ascending',
  Descending = 'descending',
}
