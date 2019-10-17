module.exports = {
  plugins: ['lodash'],
  extends: [
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    // No need to convert between OS platforms
    'linebreak-style': 'off',
    'require-await': 'error',
    // Allow dev dependencies to be explicitly required in tools and such
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
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
    ],
    'lodash/import-scope': ['error', 'method'],
    'lodash/prefer-compact': 'error',
    'lodash/prefer-immutable-method': 'error',
    'lodash/prefer-is-nil': 'error',
    'lodash/prefer-lodash-typecheck': 'error',
    'lodash/prefer-noop': 'error',
  }
}