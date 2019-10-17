module.exports = {
  plugins: ['react-native'],
  extends: [
    '@heed/heed/react'
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
}