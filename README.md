# Tableau Extensions API

A wrapper around the Tableau Extensions API that exposes `tableau` as a module instead of relying on `window.tableau`. Includes TypeScript type declarations from the official Tableau Extensions API.

## Installation

```bash
npm install tableau-extensions-api
```

## Usage

```js
import tableau from 'tableau-extensions-api'

await tableau.extensions.initializeAsync()
```

## Additional Usage Details

The `tableau-extensions-api` package provides convenient access to commonly used objects and types from the Tableau Extensions API. Below are additional details about its usage:

### Commonly Used Objects

The following objects are exported for direct use, eliminating the need to access them via `tableau.extensions.NAMESPACE`:

- `extensions`: The main Extensions interface.
- `dashboard`: Access to the dashboard content.
- `worksheet`: Access to the worksheet content.
- `settings`: Access to the settings interface.
- `environment`: Access to the environment interface.
- `ui`: Access to the UI interface.

These objects can be imported as follows:

```js
import { extensions, dashboard, worksheet, settings, environment, ui } from 'tableau-extensions-api'

await extensions.initializeAsync()
console.log(dashboard.name)
```

### Importing the Tableau Object

The `tableau` object is available as the default export of the package. It provides access to all enums and other global objects from the Tableau Extensions API. For example:

```typescript
import tableau from 'tableau-extensions-api'

console.log(tableau.extensions)
console.log(tableau.FilterType.Categorical)
```

This approach ensures compatibility and simplifies access to enums and other global objects.

### TypeScript Types and Enums

The package also exports all global types and enums from the Tableau Extensions API. These can be imported using TypeScript's `import type` feature:

```typescript
import type * as Enums from 'tableau-extensions-api'
import type { Field, Filter } from 'tableau-extensions-api'

const filterType: Enums.FilterType = tableau.FilterType.Categorical
console.log(filterType)

const field: Field = { /* ... */ }
console.log(field)

const filter: Filter = { /* ... */ }
console.log(filter)
```

This allows for strong typing and better development experience when working with the Tableau Extensions API.

## Contributing

This project was developed individually to make it easier to work with the Tableau Extensions API. It is NOT officially maintained by Tableau. Contributions and bug reports are welcome!

**How to contribute:**
- Fork this repo and create a feature branch
- Make your changes and include/update tests if needed
- Follow existing code style and write clear commit messages
- Open a pull request describing your changes

For questions or issues, please open a GitHub issue with details.

## Related Resources

- [Tableau Extensions API Guide](https://tableau.github.io/extensions-api/)
- [Tableau Extensions API Reference](https://tableau.github.io/extensions-api/api/)
- [Tableau Extensions API GitHub Repository](https://github.com/tableau/extensions-api)
