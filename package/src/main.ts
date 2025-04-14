import '../vendor/tableau-extensions/tableau.extensions.1.latest.min.js'
const tableau = Reflect.get(window, 'tableau')
Reflect.set(window, 'tableau', void 0)

// export the tableau object, by default
export default tableau
