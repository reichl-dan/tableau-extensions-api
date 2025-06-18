/**
 * Import the Tableau Extension API
 */
import '../vendor/tableau-extensions/tableau.extensions.1.latest.min.js'

/**
 * Export the Tableau Types and global object
 */
export type * from './types.js'
export default tableau

/**
 * Export commonly used objects within the Tableau global object
 */
export const extensions = tableau.extensions
// biome-ignore lint/style/noNonNullAssertion: user is expected to know if dashboard object exists
export const dashboard = tableau.extensions.dashboardContent?.dashboard!
// biome-ignore lint/style/noNonNullAssertion: user is expected to know if worksheet object exists
export const worksheet = tableau.extensions.worksheetContent?.worksheet!
export const settings = tableau.extensions.settings
export const environment = tableau.extensions.environment
export const ui = tableau.extensions.ui
