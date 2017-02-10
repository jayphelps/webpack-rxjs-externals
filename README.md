# webpack-rxjs-externals

Utility to generate all the ["externals"](https://webpack.js.org/configuration/externals/#externals) for your webpack config.

Since RxJS is ever-changing, this removes the need to maintain a list, instead generating it on the fly.

> **Requires webpack v2**

#### webpack.config.js

```js
import webpackRxjsExternals from 'webpack-rxjs-externals';

export default {
  externals: [
    webpackRxjsExternals(),
    // other externals here
  ]
};
```
