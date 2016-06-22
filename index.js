var path = require('path');
var glob = require('glob');

var rxjsPath = path.dirname(require.resolve('rxjs'));

var files = glob.sync(rxjsPath + '/**/*.js');

var rootPatterns = [{
  prefix: 'operator/',
  root: ['Rx', 'Observable', 'prototype']
}, {
  prefix: 'observable/',
  root: ['Rx', 'Observable']
}, {
  prefix: 'scheduler/',
  root: ['Rx', 'Scheduler']
}];

function rootForPath(path) {
  for (var i = 0, l = rootPatterns.length; i < l; i++) {
    if (path.indexOf(rootPatterns[i].prefix) === 0) {
      return rootPatterns[i].root;
    }
  }

  return 'Rx';
}

function createExternals() {
  return files.reduce(function (externs, file) {
    var path = file.replace(rxjsPath, '').replace(/^\/(.*)\.[^.]+$/, '$1');
    externs['rxjs/' + path] = {
      root: rootForPath(path)
    };

    return externs;
  }, {});
}

module.exports = createExternals;
