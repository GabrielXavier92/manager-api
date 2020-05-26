module.exports = {
  extends: [
    'airbnb-typescript/base'
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "import/extensions": 0,
    "max-len": 120
  }
};