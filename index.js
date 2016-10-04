var path = require('path');
var glob = require('glob');

var rxjsPath = path.dirname(require.resolve('rxjs'));

var files = glob.sync(rxjsPath + '/**/*.js', {
  ignore: rxjsPath + '/{add,bundles,src}/**/*.js'
});

var rootPatterns = [{
  // rxjs/operator/map
  regex: /^operator\//,
  root: ['Rx', 'Observable', 'prototype']
}, {
  // rxjs/observable/interval
  regex: /^observable\/[a-z]/,
  root: ['Rx', 'Observable']
}, {
  // rxjs/observable/MulticastObservable
  regex: /^observable\/[A-Z]/,
  root: 'Rx'
}, {
  // rxjs/scheduler/asap
  regex: /^scheduler\/[a-z]/,
  root: ['Rx', 'Scheduler']
}, {
  // rxjs/scheduler/VirtualTimeScheduler
  regex: /^scheduler\/[A-Z]/,
  root: 'Rx'
}];

function rootForPath(path) {
  for (var i = 0, l = rootPatterns.length; i < l; i++) {
    if (path.match(rootPatterns[i].regex)) {
      return rootPatterns[i].root;
    }
  }

  return 'Rx';
}

function createExternals() {
  return files.reduce(function (externs, file) {
    var path = file.replace(rxjsPath, '').replace(/^\/(.*)\.[^.]+$/, '$1');
    var fullPath = 'rxjs/' + path;

    externs[fullPath] = {
      root: rootForPath(path),
      commonjs2: fullPath,
      commonjs: fullPath,
      amd: fullPath
    };

    return externs;
  }, {});
}

module.exports = createExternals;
