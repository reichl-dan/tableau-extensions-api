import * as ERRORS from './errors.js'

/**
 * Import the Tableau Extension API
 */
import '../vendor/tableau-extensions/tableau.extensions.1.latest.min.js'

/**
 * Export the Tableau Types and global object
 */
export * from './types.js'
export default tableau

/**
 * Boolean to indicate if the Tableau Extensions API has been initialized
 */
let initialized = false

/**
 * Initialize the Tableau Extensions API if it hasn't been initialized yet
 */
async function initialize() {
  if (initialized) return
  await tableau.extensions.initializeAsync()
  initialized = true
}

/**
 * Returns the current dashboard object.
 */
export async function getDashboardExtension() {
  await initialize()
  const dashboard = tableau.extensions.dashboardContent?.dashboard
  if (!dashboard) throw new Error(ERRORS.DASHBOARD_NOT_FOUND)
  return dashboard
}

/**
 * Returns the current worksheet object.
 */
export async function getWorksheetExtension() {
  await initialize()
  const worksheet = tableau.extensions.worksheetContent?.worksheet
  if (!worksheet) throw new Error(ERRORS.WORKSHEET_NOT_FOUND)
  return worksheet
}

/**
 * Returns the extension configuration object.
 */
export async function getExtensionConfig() {
  await initialize()
  const settings = tableau.extensions.settings
  const environment = tableau.extensions.environment
  const ui = tableau.extensions.ui
  return { settings, environment, ui }
}
