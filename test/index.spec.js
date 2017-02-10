const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const MemoryFileSystem = require('memory-fs');
const { expect } = require('chai');
const webpackRxjsExternals = require('../index');

const fixturesDir = 'fixtures';
const fixtures = fs.readdirSync(path.join(__dirname, fixturesDir));

describe('webpack-rxjs-externals', () => {

  it('should mark rxjs imports as external', () => {

    const promises = fixtures.map(fixture => {

      return new Promise((resolve, reject) => {

        try {

          const config = {
            entry: path.join(__dirname, fixturesDir, fixture, 'index.js'),
            output: {
              filename: 'index.js',
              path: __dirname,
              libraryTarget: 'umd',
              library: 'rxjsTest'
            },
            externals: webpackRxjsExternals()
          };

          const expectedOutput = fs.readFileSync(path.join(__dirname, fixturesDir, fixture, 'expected', 'index.js')).toString();

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

  });

});