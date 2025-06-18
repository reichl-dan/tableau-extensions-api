# Tableau Extensions API

A wrapper around the Tableau Extensions API that exposes `tableau` as a module instead of relying on `window.tableau`. Includes TypeScript type declarations from the official Tableau Extensions API.

## Installation

```bash
npm install tableau-extensions-api
```

## Quick Start

The package provides convenient helper functions that automatically initialize the Tableau Extensions API:

### Dashboard Extensions

```js
import { getDashboardExtension } from 'tableau-extensions-api'

// Automatically initializes and returns the dashboard object
const dashboard = await getDashboardExtension()
console.log(dashboard.name)
console.log(dashboard.worksheets)
```

### Viz Extensions (Worksheet Extensions)

```js
import { getWorksheetExtension } from 'tableau-extensions-api'

// Automatically initializes and returns the worksheet object
const worksheet = await getWorksheetExtension()
console.log(worksheet.name)
const data = await worksheet.getSummaryDataAsync()
```

### Extension Configuration

```js
import { getExtensionConfig } from 'tableau-extensions-api'

// Automatically initializes and returns settings, environment, and UI objects
const { settings, environment, ui } = await getExtensionConfig()
console.log(environment.context) // 'dashboard' or 'worksheet'
settings.set('myKey', 'myValue')
await settings.saveAsync()
```

## Advanced Usage

### Direct Access to Tableau Object

The `tableau` object is still available as the default export for advanced use cases or when you need direct access to the Extensions API:

```js
import tableau from 'tableau-extensions-api'

// Manual initialization (not required when using helper functions above)
await tableau.extensions.initializeAsync()

// Access to all enums and global objects
console.log(tableau.FilterType.Categorical)
console.log(tableau.extensions.environment.context)
```

### Error Handling

The helper functions include built-in error handling for common scenarios:

```js
import { getDashboardExtension, getWorksheetExtension } from 'tableau-extensions-api'

try {
  // This will throw an error if not running in a dashboard extension context
  const dashboard = await getDashboardExtension()
} catch (error) {
  console.error('Not running as dashboard extension:', error.message)
}

try {
  // This will throw an error if not running in a viz extension context
  const worksheet = await getWorksheetExtension()
} catch (error) {
  console.error('Not running as viz extension:', error.message)
}
```

### TypeScript Support

The package includes full TypeScript type definitions and exports all types from the Tableau Extensions API:

```typescript
import type { Dashboard, Worksheet, Parameter, Filter } from 'tableau-extensions-api'
import { getDashboardExtension, getWorksheetExtension } from 'tableau-extensions-api'

// Fully typed objects
const dashboard: Dashboard = await getDashboardExtension()
const worksheet: Worksheet = await getWorksheetExtension()

// Access to all Tableau types and enums
import tableau, { type TableauEventType } from 'tableau-extensions-api'

const filterType = tableau.FilterType.Categorical
const eventType: TableauEventType = 'filter-changed'
```

## Related Resources

- [Tableau Extensions API Guide](https://tableau.github.io/extensions-api/)
- [Tableau Extensions API Reference](https://tableau.github.io/extensions-api/api/)
- [Tableau Extensions API GitHub Repository](https://github.com/tableau/extensions-api)
