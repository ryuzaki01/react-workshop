var path = require('path');

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['react', 'import'],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {jsx: true}
  },
  settings: {
    'import/resolver': 'webpack',
    'import/ignore': '.(scss|less|css|png|jpg|jpeg|bmp|gif|svg)$',
    'import/extensions': ['.js', '.jsx']
  },
  globals: {
    App: true,
    sinon: true,
    globals: true,
    expect: true,
    importScripts: true,
    webpackIsomorphicTools: true,
    __TEST__: true,
    __DEVTOOLS__: true,
    __DEVELOPMENT__: true,
    __CLIENT__: true,
    __DISABLE_SSR__: true,
    __SERVER__: true,
    __DLLS__: true,
  },
  env: {
    commonjs: true,
    browser: true,
    jquery: true,
    mocha: true,
    node: true,
    amd: true,
    es6: true
  },
  rules: {
    radix: 2,
    eqeqeq: 2,
    'no-eval': 2,
    'no-with': 2,
    'no-console': 0,
    'jsx-quotes': 2,
    'no-unused-vars': [1, {
      vars: 'local',
      args: 'after-used',
      argsIgnorePattern: '^_'
    }],
    curly: [2, 'all'],
    yoda: [2, 'never'],
    'import/no-unresolved': [1, {commonjs: true, amd: true}],
    'import/named': 0,
    'import/namespace': 2,
    'import/default': 0,
    'import/export': 2,
    'react/display-name': [0, { ignoreTranspilerName: true }],
    'react/forbid-prop-types': [1, { forbid: ['any', 'array'] }],
    'react/jsx-boolean-value': 2,
    'react/jsx-closing-bracket-location': [2, 'after-props'],
    'react/jsx-curly-spacing': 2,
    'react/jsx-handler-names': 2,
    'react/jsx-indent': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [1, { maximum: 5 }],
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 0,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-set-state': 0,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 2,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/jsx-wrap-multilines': 2
  }
};
