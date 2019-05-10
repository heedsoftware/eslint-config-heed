module.exports = {
  configs: {
    recommended: {
      extends: [
        'semistandard',
        'plugin:prettier/recommended'
      ],
      parser: 'babel-eslint'
    },
    react: {
      extends: [
        'plugin:@heed/heed/recommended',
        'plugin:react/recommended'
      ],
      rules: {
        'react/prop-types': 'off',
        'react/display-name': 'off'
      }
    },
    testing: {
      extends: [
        'plugin:jest/recommended',
        "plugin:ava/recommended"
      ],
      plugins: ['ava']
    }
  }
};
