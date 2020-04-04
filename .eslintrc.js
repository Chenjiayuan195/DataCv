module.exports = {
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:import/typescript"],
  "plugins": [
    "react",
    "react-native",
    "@typescript-eslint"
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 2,
      },
    },
  ],
  "parser": "@typescript-eslint-parser",
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
  },
  "rules": {
    "no-tabs": 2,
    "quotes": [2, "single", { "allowTemplateLiterals": true }],
    "jsx-quotes": [2, "prefer-single"],
    "eqeqeq": 2,
    "no-undef": 0,
    "typescript/class-name-casing": 2
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  }
}

