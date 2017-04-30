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

### Including rxjs via a script tag
If including rxjs as a script tag on the page and not using this to package a library then you will need to set the script tag option: `webpackRxjsExternals({scriptTag: true})`