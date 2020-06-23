### boilerplate - 2020 (REACT -- TS -- REDUX -- SAGAS
**Key feature: CLI for auto generation MVVM (bash-scripts)**

Page (generated new view, view-model, styles, exports, etc.)
```sh
$ yarn new:page
```
Shared component (generated new view, styles, exports)
```sh
$ yarn new:shared
```
New redux-entity (generated new module for redux: reducer, actions, types, etc.)
```sh
$ yarn new:entity
```

#### Powered by:
- React
- Typescript
- Redux
- Redux-saga
- Redux-actions
- React-router-redux
- React-router-dom
- Connected-react-router
- Lodash
- Reselect
 
#### Installation and run

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

#### Optimization
**production build:**
- optimize-css-assets-webpack-plugin
- terser-webpack-plugin

**production & development analizer:**
- webpack-bundle-analyzer
#### Stay in touch
- ###### Authors (vk) - [Zharavin Arkady](https://vk.com/a.zharavin)
