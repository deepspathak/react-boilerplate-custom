/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');
// const languageGenerator = require('./language/index.js');
const serviceGenerator = require('./service/index.js');

const prettify = require('./utils/prettify');

const cwd = process.cwd();

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('service', serviceGenerator);
  // plop.setGenerator('language', languageGenerator);
  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(
        path.join(__dirname, `../../app/containers/${comp}`),
        fs.F_OK
      );
      return `containers/${comp}`;
    } catch (e) {
      return `components/${comp}`;
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
  plop.setActionType('prettifySagas', () => {
    prettify(path.resolve(cwd, 'app/serviceSagas.js'));
    prettify(path.resolve(cwd, 'app/serviceReducers.js'));
    return 'prettified files';
  });
};
