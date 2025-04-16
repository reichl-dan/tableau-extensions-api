// import types
import type * as Enums from './enums/_enums'
import type { Extensions } from './types/_types'

// import tableau extension api
import '../vendor/tableau-extensions/tableau.extensions.1.latest.min.js'

// export the tableau types
export type Tableau = { extensions: Extensions } & typeof Enums
export * from './types/_types'
export * from './enums/_enums'

// export the tableau object
const tableau: Tableau = Reflect.get(window, 'tableau')
Reflect.set(window, 'tableau', void 0)
export default tableau

// export commonly used objects
export const extensions = tableau.extensions
export const dashboard = tableau.extensions.dashboardContent.dashboard
export const worksheet = tableau.extensions.worksheetContent.worksheet
export const settings = tableau.extensions.settings
export const environment = tableau.extensions.environment
export const ui = tableau.extensions.ui
