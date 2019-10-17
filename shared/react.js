module.exports = {
  extends: [
    'airbnb',
    './core',
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
    'camelcase': ['error', { properties: 'never', ignoreDestructuring: false, allow: ['^UNSAFE_'] }],
    // allow spreading jsx props when being used within a hoc
    'react/jsx-props-no-spreading': ['error', { 'html': 'enforce', 'custom': 'enforce', 'exceptions': ['WrappedComponent', 'IntegrationWrapper'] }],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
}