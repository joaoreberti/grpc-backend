const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const eslintTypescriptRecommended = require("@typescript-eslint/eslint-plugin");

module.exports = [
  // Any other config imports go at the top
  eslintPluginPrettierRecommended,
  eslintTypescriptRecommended,
  {
    files: ["src/**/*.js", "src/**/*.ts", "./eslint.config.js"], // Include JavaScript and TypeScript files in the src directory,
    ignores: ["src/proto/*"], // Exclude test files
  },
];
