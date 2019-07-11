module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb',
  plugins: [
    'react'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          alias: {
            '@': '../',
            components: '../components',
          },
          resolve: {
            extensions: ['.js', '.jsx', '.json'],
          }
        }
      }
    }
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 'off',
    indent: [
      'warn',
      2
    ],
    'linebreak-style': [
      'warn',
      'unix'
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-filename-extension': 'off',
    'no-unused-expressions': 'warn',
    'no-useless-concat': 'warn',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    'import/no-extraneous-dependencies': ['off', {
      'devDependencies': [
      ],
      'peerDependencies': false,
      'optionalDependencies': false,
    }],
  }
};
