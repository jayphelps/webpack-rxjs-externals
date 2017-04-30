const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const MemoryFileSystem = require('memory-fs');
const expect = require('chai').expect;
const webpackRxjsExternals = require('../index');

const fixturesDir = 'fixtures';

function testDir(fixturesSubDir, webpackOutputOptions, libOptions) {

  const specFeaturesDir = path.join(fixturesDir, fixturesSubDir);

  const fixtures = fs.readdirSync(path.join(__dirname, specFeaturesDir));

  const promises = fixtures.map(fixture => {

    return new Promise((resolve, reject) => {

      try {

        const config = {
          entry: path.join(__dirname, specFeaturesDir, fixture, 'index.js'),
          output: Object.assign({
            filename: 'index.js',
            path: __dirname
          }, webpackOutputOptions),
          externals: webpackRxjsExternals(libOptions)
        };

        const expectedOutput = fs.readFileSync(path.join(__dirname, specFeaturesDir, fixture, 'expected', 'index.js')).toString();

        const compiler = webpack(config);
        compiler.outputFileSystem = new MemoryFileSystem();

        compiler.run((err, stats) => {
          if (err) {
            reject(err);
          }
          const actualOutput = stats.compilation.assets['index.js'].source();
          expect(actualOutput).to.equal(expectedOutput);
          resolve();
        });

      } catch (err) {
        reject(err);
      }

    });

  });

  return Promise.all(promises);

}

describe('webpack-rxjs-externals', () => {

  it('should mark rxjs imports as external', () => {
    return testDir('default', {
      libraryTarget: 'umd',
      library: 'rxjsTest'
    });
  });

  it('should allow rxjs to be included via a script tag', () => {
    return testDir('script-tag', {}, {
      scriptTag: true
    });
  });

});