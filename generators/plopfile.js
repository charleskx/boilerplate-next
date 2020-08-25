module.exports = function (plop) {
  // pages generator
  plop.setGenerator('page', {
    description: 'application page logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the page?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/pages/{{snakeCase name}}.js',
        templateFile: 'templates/page/index.hbs'
      }
    ]
  })

  // components generator
  plop.setGenerator('component', {
    description: 'application component logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the component?'
      },
      {
        type: 'confirm',
        name: 'test',
        message: 'Generate tests for the component?',
        default: true
      },
      {
        type: 'confirm',
        name: 'storybook',
        message: 'Generate new Storybook file?',
        default: true
      }
    ],
    actions: ({ test, storybook }) => {
      const actions = [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/component/index.hbs'
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/styles.tsx',
          templateFile: 'templates/component/styles.hbs'
        }
      ]

      if (test) {
        actions.push({
          type: 'add',
          path: '../src/components/{{pascalCase name}}/test.tsx',
          templateFile: 'templates/component/test.hbs'
        })
      }

      if (storybook) {
        actions.push({
          type: 'add',
          path: '../src/components/{{pascalCase name}}/stories.tsx',
          templateFile: 'templates/component/stories.hbs'
        })
      }

      return actions
    }
  })
}
