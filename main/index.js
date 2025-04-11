import './tableau.extensions.1.latest.min.js'

/** @type {import('../types/index.d.ts').Tableau} */
const tableau = window.tableau

// export the tableau object, by default
export default tableau

// export tableau extensions properties
export const extension = tableau.extensions
export const settings = tableau.extensions.settings
export const ui = tableau.extensions.ui
export const environment = tableau.extensions.environment
export const worksheet = tableau.extensions.worksheetContent.worksheet
export const dashboard = tableau.extensions.dashboardContent.dashboard

// export tableau enums
export const Tableau = { ...tableau, extensions: void 0 }

// Export all types from the type definitions
// This allows importing types directly in TypeScript files
export type {
  MarkInfo,
  // Add other types here as needed
} from '../types/globals.d.ts

// remove global reference
window.tableau = void 0
