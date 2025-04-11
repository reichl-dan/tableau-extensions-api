# tableau-extensions-api

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

## Related Resources

- [Tableau Extensions API Guide](https://tableau.github.io/extensions-api/)
- [Tableau Extensions API Reference](https://tableau.github.io/extensions-api/api/)
- [Tableau Extensions API GitHub Repository](https://github.com/tableau/extensions-api)
