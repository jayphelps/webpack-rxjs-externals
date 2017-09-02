# webpack-rxjs-externals

Utility to generate all the ["externals"](https://webpack.js.org/configuration/externals/#externals) for your webpack config.

Since RxJS is ever-changing, this removes the need to maintain a list, instead generating it on the fly.

**Requires webpack v2**

<a href="https://app.codesponsor.io/link/zs7vWiDv2F99bX6Ay7PJa5WE/jayphelps/webpack-rxjs-externals" rel="nofollow"><img src="https://app.codesponsor.io/embed/zs7vWiDv2F99bX6Ay7PJa5WE/jayphelps/webpack-rxjs-externals.svg" style="width: 888px; height: 68px;" alt="Sponsor" /></a>

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
