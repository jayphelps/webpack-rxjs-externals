const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const { createFsFromVolume, Volume } = require('memfs');
const expect = require('chai').expect;
const webpackRxjsExternals = require('../index');

const fixturesDir = 'fixtures';
const fixtures = fs.readdirSync(path.join(__dirname, fixturesDir))
  .filter(item => !(/(^|\/)\.[^\/\.]/g).test(item)); // ignore hidden files

describe('webpack-rxjs-externals', () => {
  it('should mark rxjs imports as external', () => {
    const promises = fixtures.map(fixture => {
      return new Promise((resolve, reject) => {
        const config = {
          entry: path.join(__dirname, fixturesDir, fixture, 'index.js'),
          mode: 'development',
          devtool: false,
          output: {
            filename: 'index.js',
            path: '/',
            libraryTarget: 'umd',
            library: 'rxjsTest'
          },
          externals: [
            webpackRxjsExternals(),
            ({context, request}, callback) => {
              const externs = ['whatever-rxjs', 'rxjs-whatever'];
              const name = externs.find(item => item === request);

              if (name) {
                callback(null, {
                  root: name,
                  commonjs: name,
                  commonjs2: name,
                  amd: name.split('-').join('_')
                });
              } else {
                callback();
              }
            }
          ]
        };

        const expectedOutput = fs.readFileSync(path.join(__dirname, fixturesDir, fixture, 'expected', 'index.js')).toString();

        const compiler = webpack(config);
        const memoryFileSystem = createFsFromVolume(new Volume());
        compiler.outputFileSystem = memoryFileSystem;

        compiler.run((err, stats) => {
          if (err) {
            reject(err);
          }
          const actualOutput = memoryFileSystem.readFileSync('/index.js').toString();
          expect(actualOutput).to.equal(expectedOutput);
          resolve();
        });
      });
    });

    return Promise.all(promises);
  });
});
