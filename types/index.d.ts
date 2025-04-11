/**
 * Tableau Extensions API
 * This file serves as the main entry point for the Tableau Extensions API type definitions.
 */

// Export types for the Tableau Extensions API
export * from './globals'
export * from './extensions'
export * from './enums'

// Global declaration of the tableau object
import * as TableauEnums from './enums'

/**
 * Global Tableau extensions interface
 */
export interface Tableau extends TableauEnums {
  extensions: TableauExtensions
}
