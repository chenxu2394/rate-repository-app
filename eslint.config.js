const {
  configs: { recommended: eslintRecommended },
} = require("@eslint/js");
const reactPlugin = require("eslint-plugin-react");
const reactNativePlugin = require("eslint-plugin-react-native");
const babelParser = require("@babel/eslint-parser");

module.exports = [
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["**/node_modules/**"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["babel-preset-expo"],
        },
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: { react: reactPlugin, "react-native": reactNativePlugin },
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jest/recommended",
    ],
    rules: {
      // ESLint “recommended” rules
      ...eslintRecommended.rules,

      // React “recommended” rules
      ...reactPlugin.configs.recommended.rules,

      // Custom overrides (from tutorial)
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
    },
    globals: {
      fetch: false,
      console: false,
    },
  },
];
