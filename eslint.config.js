const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = [
  // Any other config imports go at the top
  eslintPluginPrettierRecommended,
  {
    files: ["src/**/*.js", "src/**/*.ts", "./eslint.config.js"], // Include JavaScript and TypeScript files in the src directory,
    ignores: ["src/proto/*"], // Exclude test files
  },
];
