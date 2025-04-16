// import types
import type * as Enums from './enums/_enums'
import type { Extensions } from './types/extensions'

// import tableau extension api
import '../vendor/tableau-extensions/tableau.extensions.1.latest.min.js'

// export the tableau types
export type Tableau = { extensions: Extensions } & typeof Enums
export type EnumValue<T> = T[keyof T]
export * from './types/_types'
export * from './enums/_enums'

// export the tableau object
const tableau: Tableau = Reflect.get(window, 'tableau')
Reflect.set(window, 'tableau', void 0)
export default tableau
