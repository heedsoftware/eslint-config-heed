module.exports = {
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
  rules: {
    // Allow padding before beforeAll and beforeEach blocks as we often declare variables there to be initialised within the block
    'jest-formatting/padding-around-before-all-blocks': 'off',
    'jest-formatting/padding-around-before-each-blocks': 'off'
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
}