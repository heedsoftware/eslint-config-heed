module.exports = {
  configs: {
    base: {
      extends: [
        'plugin:prettier/recommended',
      ],
      parser: 'babel-eslint',
      rules: {
        // No need to convert between OS platforms
        'linebreak-style': 'off',
        'require-await': 'error',
        // Allow dev dependencies to be explicitly required in tools and such
        'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
        // Allow mongo id fields
        'no-underscore-dangle': ['error', { 'allow': ['_id'] }],
        // Allow functions to be defined anywhere
        'no-use-before-define': ['error', { 'functions': false, 'classes': true, 'variables': true }],
        'padding-line-between-statements': [
            'error',
            {
                'blankLine': 'always',
                'prev': ['block', 'block-like', 'cjs-export', 'class', 'export', 'import'],
                'next': '*'
            },
            { 'blankLine': 'any', 'prev': ['export', 'import'], 'next': ['export', 'import'] }
        ],
        // Allow not to destructure an object when assigning to an already existing variable
        'prefer-destructuring': [
          'error',
          {
            'VariableDeclarator': { 'array': true, 'object': true },
            'AssignmentExpression': { 'array': true, 'object': false }
          },
          { enforceForRenamedProperties: false, }
        ]
      }
    },
    recommended: {
      extends: [
        'airbnb-base',
        'plugin:@heed/heed/base'
      ],
    },
    react: {
      extends: [
        'airbnb',
        'plugin:@heed/heed/base',
        'prettier/react',
      ],
      env: {
        'browser': true
      },
      rules: {
        // Allows custom prop type declarations and hoisting common prop types into other variables
        'react/no-typos': 'off',
        // allow usage of tagged templates such as injectGlobal from styled-components
        'no-unused-expressions': ['error', { 'allowTaggedTemplates': true }],
        // allow the unsafe lifecycle methods prefixed with UNSAFE_
        'camelcase': ['error', { allow: ['^UNSAFE_'] }],
      },
      settings: {
        react: {
          pragma: 'React',
          version: 'detect'
        }
      },
    },
    'react-hooks': {
      extends: [
        'plugin:@heed/heed/react',
        'airbnb/hooks'
      ],
    },
    'react-native': {
      plugins: ['react-native'],
      extends: [
        'plugin:@heed/heed/react'
      ],
      rules: {
        // Asset requiring uses inline require() calls
        'global-require': 'off',
        // Primarily for StyleSheet definitions since the convention is to define them after the component
        'no-use-before-define': ['error', { 'functions': true, 'classes': true, 'variables': false }],
        'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],
        'react-native/no-unused-styles': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
      },
      env: {
        'react-native/react-native': true
      },
    },
    jest: {
      plugins: [
        'jest',
        'jest-formatting'
      ],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-formatting/recommended'
      ],
      env: {
        'jest/globals': false
      },
      overrides: [
        {
          files: [
            'setupTests.js',
            'test-setup-*.browser.js',
            '**/*.spec.js',
            '**/__mocks__/**',
            '**/__test_helpers__/**',
            '**/__tests__/**',
            '**/__TESTS__/**'
          ],
          env: {
            'jest/globals': true
          },
          rules: {
            // Allow inline require() when using doMock conventions
            'global-require': 'off',
          }
        }
      ]
    },
    testing: {
      extends: [
        'plugin:jest/recommended',
        'plugin:ava/recommended'
      ],
      plugins: ['ava']
    }
  }
};
