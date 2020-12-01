/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint/eslint-plugin", "import"],
  "env": {
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:import/typescript"],
  "parserOptions": {
    "ecmaVersion": 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    },
  },
  "rules": {
    "import/no-cycle": [
      "error", {}
    ]
  }
}
