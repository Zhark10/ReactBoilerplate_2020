### Boilerplate - 2020 (REACT - TS - REDUX - SAGAS)
**Key feature: CLI for auto generation MVVM (bash-scripts)**

***For example (generation via...): Linux - terminal, Windows - Git Bash***

Page (is generate new view, view-model, styles, exports, etc.)
```sh
$ yarn new:page
```
Shared component (is generate new view, styles, exports)
```sh
$ yarn new:shared
```
New redux-entity (is generate new module for redux: reducer, actions, types, etc.)
```sh
$ yarn new:entity
```
New modal (is generate new modal in portal, default styles, button to close, etc.)
```sh
$ yarn new:modal
```

## Description
A modern template for building SPA that includes firebase authentication, a user-friendly portal for modals, handling and displaying server errors at the middleware.

### Powered by:
- React
- Typescript
- Redux
- Redux-saga
- Redux-actions
- React-router-redux
- React-router-dom
- Connected-react-router
- Use-form
- Firebase
 
### Installation and run

**development build:**

```sh
$ yarn install && yarn build:dev
```

**production build:**

```sh
$ yarn install && yarn build:release
```

**running build on local dev-server:**

```sh
$ yarn start
```

**change enviroment:**

```sh
$ yarn env:dev
$ yarn env:prod
```

**get current bundle stats:**

```sh
$ yarn stats
```

### Optimization
**production build:**
- optimize-css-assets-webpack-plugin
- terser-webpack-plugin

**production & development analizer:**
- webpack-bundle-analyzer
### Stay in touch
- ###### Authors (vk) - [Zharavin Arkady](https://vk.com/a.zharavin)
