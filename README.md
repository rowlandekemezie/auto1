# Auto1 Group Car catalogue with seamless filtering capability.

[![CircleCI](https://circleci.com/gh/rowlandekemezie/auto1/tree/master.svg?style=shield&circle-token=d3feab8a62521ec838b8cf40179b66c0d84effab)](https://circleci.com/gh/rowlandekemezie/auto1/tree/master)

![Auto screen](./src/static/auto1-screen.png)

## Prerequisites

- Clone the repository
- Install dependencies for the mock-server
  ```
  cd mock-server && npm install
  ```
- Run `yarn install` in the root directory to install client dependencies

### To run locally for development

```bash
  npm dev # This starts the backend and frontend concurrently.
```

### Run test

```bash
  npm test
```

### Build for production

```bash
  npm run build
```

## Features

- Aggregation filtering
- Pagination
- All functional components
- Redux-saga as redux middleware
- Use React Hooks and only function components
- CSS-in-JSS for styling.
- Unit tests: Components, Actions, Reducers, Sagas and store
- Code splitting
- Dynamic imports
- Super fast page loadtime
- Proper typechecking checking
- Responsive UI
- PWA support

Made with ❤️ by @rowlandekemezie.
