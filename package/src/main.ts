// import types
import type { TableauExtensions } from './types/extensions'

// import tableau extension api
import '../vendor/tableau-extensions/tableau.extensions.1.latest.min.js'

// get the tableau object
const tableau: TableauExtensions = Reflect.get(window, 'tableau')

// export the tableau object, by default
export default tableau

// remove the tableau object from the window
Reflect.set(window, 'tableau', void 0)
