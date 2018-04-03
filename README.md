# webpack-rxjs-externals

Utility to generate all the ["externals"](https://webpack.js.org/configuration/externals/#externals) for your webpack config.

Since RxJS is ever-changing, this removes the need to maintain a list, instead generating it on the fly.

**Latest version only works with v6+ import paths, NOT the older v5 deep paths. Use v1.1.0 version for rxjs v5**
**Requires webpack v2**

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

#### Example of v6 imports this supports

```js
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

of(1, 2, 3).pipe(
  map(d => d * 10)
);
```

Remember, this version does NOT support the older deep imports `rxjs/operator/map` etc.
