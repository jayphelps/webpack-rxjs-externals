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

function rxjsExternalsFactory(opts) {

  opts = opts || {};
  const scriptTag = opts.scriptTag || false;

  return function rxjsExternals(context, request, callback) {

    if (request.startsWith('rxjs/')) {

      let result = {
        root: rootForRequest(request),
        commonjs: request,
        commonjs2: request,
        amd: request
      };

      if (scriptTag) {
        result = result.root;
        if (Array.isArray(result)) {
          result = result.join('.');
        }
      }

      return callback(null, result);
    }

    callback();

  };

}

module.exports = rxjsExternalsFactory;
