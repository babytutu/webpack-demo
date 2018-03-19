module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  // add your custom rules here
  rules: {
    'no-debugger': [1],
    'no-alert': [1],
    'no-console': [0],
    'no-new': [0],
  },
};