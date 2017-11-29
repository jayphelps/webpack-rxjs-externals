const rootPatterns = [{
  // rxjs/operators/map
  regex: /^rxjs\/operators\//,
  root: ['Rx', 'operators']
}, {
  // rxjs/operators
  regex: /^rxjs\/operators/,
  root: ['Rx', 'operators']
}, {
  // rxjs/operator/map
  regex: /^rxjs\/operator\//,
  root: ['Rx', 'Observable', 'prototype']
}, {
  // rxjs/observable/interval
  regex: /^rxjs\/observable\/[a-z]/,
  root: ['Rx', 'Observable']
}, {
  // rxjs/observable/MulticastObservable
  regex: /^rxjs\/observable\/[A-Z]/,
  root: 'Rx'
}, {
  // rxjs/scheduler/asap
  regex: /^rxjs\/scheduler\/[a-z]/,
  root: ['Rx', 'Scheduler']
}, {
  // rxjs/scheduler/VirtualTimeScheduler
  regex: /^rxjs\/scheduler\/[A-Z]/,
  root: 'Rx'
}];

function rootForRequest(path) {
  const match = rootPatterns.find(pattern => path.match(pattern.regex));

  if (match) {
    return match.root;
  }

  return 'Rx';
}

function rxjsExternalsFactory() {

  return function rxjsExternals(context, request, callback) {

    if (request.startsWith('rxjs/') && !/rxjs\/operator\/let/.test(request)) {
      return callback(null, {
        root: rootForRequest(request),
        commonjs: request,
        commonjs2: request,
        amd: request
      });
    }

    callback();

  };

}

rxjsExternalsFactory.alias = function () {

  const path = require('path');

  return {
    'rxjs/operator/let$': path.resolve(__dirname, 'let')
  };
};

module.exports = rxjsExternalsFactory;
