/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [

    {
      type: 'list',
      name: 'type',
      message: 'Select the base component type:',
      default: 'Function',
      choices: () => ['Function', 'React.PureComponent'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Form',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value) ?
            'A component or container with this name already exists' :
            true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;

    switch (data.type) {
      case 'Function':
      {
        componentTemplate = './container/index.js.hbs';
        break;
      }
      default:
      {
        componentTemplate = './container/class.js.hbs';
      }
    }

    const actions = [

      {
        type: 'add',
        path: '../../app/containers/{{properCase name}}/index.js',
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/containers/{{properCase name}}/tests/index.spec.js',
        templateFile: './container/spec.js.hbs',
        abortOnFail: true,
      },
    ];

    // Actions
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/actions.js',
      templateFile: './container/actions.js.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/tests/actions.spec.js',
      templateFile: './container/actions.spec.js.hbs',
      abortOnFail: true,
    });

    // Constants
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/constants.js',
      templateFile: './container/constants.js.hbs',
      abortOnFail: true,
    });

    // Selectors
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/selectors.js',
      templateFile: './container/selectors.js.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/tests/selectors.spec.js',
      templateFile: './container/selectors.spec.js.hbs',
      abortOnFail: true,
    });

    // Reducer
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/reducer.js',
      templateFile: './container/reducer.js.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/tests/reducer.spec.js',
      templateFile: './container/reducer.spec.js.hbs',
      abortOnFail: true,
    });

    // Sagas
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/sagas.js',
      templateFile: './container/sagas.js.hbs',
      abortOnFail: true,
    });
    actions.push({
      type: 'add',
      path: '../../app/containers/{{properCase name}}/tests/sagas.spec.js',
      templateFile: './container/sagas.spec.js.hbs',
      abortOnFail: true,
    });

    return actions;
  },
};
