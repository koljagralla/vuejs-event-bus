module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
