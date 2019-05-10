module.exports = {
  configs: {
    recommended: {
      extends: [
        'airbnb-base',
        'plugin:prettier/recommended',
      ],
      parser: 'babel-eslint',
      rules: {
        'linebreak-style': 'off',
        'require-await': 'error',
        'no-use-before-define': ['error', { 'functions': true, 'classes': true, 'variables': false }],
        'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
        'padding-line-between-statements': [
            'error',
            {
                'blankLine': 'always',
                'prev': ['block', 'block-like', 'cjs-export', 'class', 'export', 'import'],
                'next': '*'
            },
            { 'blankLine': 'any', 'prev': ['export', 'import'], 'next': ['export', 'import'] }
        ]
      }
    },
    react: {
      extends: [
        'plugin:@heed/heed/recommended',
        'airbnb'
      ],
      rules: {
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-closing-tag-location': 'off',
        'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx'] }],
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-max-props-per-line': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-tag-spacing': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/no-typos': 'off',
      },
      settings: {
        react: {
          pragma: 'React',
          version: 'detect'
        }
      },
    },
    'react-native': {
      plugins: ['react-native'],
      extends: [
        'plugin:@heed/heed/react'
      ],
      rules: {
        'react-native/no-unused-styles': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-color-literals': 'error',
      },
      env: {
        'react-native/react-native': true
      },
    },
    jest: {
      plugins: ['jest'],
      extends: [
        'plugin:jest/recommended'
      ],
      env: {
        'jest/globals': false
      },
      overrides: [
        {
          files: [
            '**/*.spec.js',
            '**/__mocks__/**',
            '**/__test_helpers__/**',
            '**/__tests__/**',
            '**/__TESTS__/**'
          ],
          env: {
            'jest/globals': true
          }
        }
      ],
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
