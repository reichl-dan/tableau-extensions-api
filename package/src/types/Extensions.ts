import type {
  DashboardContent,
  Environment,
  Settings,
  UI,
  Workbook,
  WorksheetContent,
} from './_types'

/**
 * Base interface for Tableau Extensions
 */
export interface Extensions {
  /**
   * Environment information
   */
  environment: Environment

  /**
   * Settings management
   */
  settings: Settings

  /**
   * UI utilities
   */
  ui: UI

  /**
   * The current workbook
   */
  workbook: Workbook

  /**
   * Dashboard content (only available for dashboard extensions)
   */
  dashboardContent: DashboardContent

  /**
   * Dashboard object ID that corresponds to this extension instance
   */
  dashboardObjectId: number

  /**
   * Worksheet content (only available for viz extensions)
   */
  worksheetContent: WorksheetContent

  /**
   * Initializes the Extensions API. This function must be called before using any other Extensions API functions.
   * @param contextMenuCallbacks Optional callbacks for context menu actions
   * @returns A promise that resolves when initialization is complete
   */
  initializeAsync(contextMenuCallbacks?: object): Promise<void>

  /**
   * Initializes the Extensions API in a dialog context.
   * @returns A promise that resolves with the dialog payload
   */
  initializeDialogAsync(): Promise<string>

  /**
   * Creates a Tableau visualization using the provided specification.
   * @param inputSpec The visualization specification
   * @returns A promise that resolves with the generated SVG
   */
  createVizImageAsync(inputSpec: object): Promise<string>

  /**
   * Sets whether the extension allows click events to pass through to underlying objects
   * @param allow Whether to allow click-through
   */
  setClickThroughAsync(allow: boolean): Promise<void>
}
