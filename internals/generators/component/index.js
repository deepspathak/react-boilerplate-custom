/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a stateless component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the base component type:',
      default: 'Stateless Function',
      choices: () => ['Stateless Function', 'Styled Component'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
  ],
  actions: (data) => {
    // check component type for template to generate index.js, and index.spec.js
    let componentType;

    switch (data.type) {
      case 'Styled Component':
        componentType = './component/styledComponent';
        break;
      default:
        componentType = './component/component';
    }

    Object.freeze(componentType);

    const actions = [
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/index.js',
        templateFile: `${componentType}.js.hbs`,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../../app/components/{{properCase name}}/tests/index.spec.js',
        templateFile: `${componentType}.spec.js.hbs`,
        abortOnFail: true,
      },
    ];

    return actions;
  },
};
