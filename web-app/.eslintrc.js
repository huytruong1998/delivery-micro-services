module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"], // Ensure ESLint finds tsconfig.json
    tsconfigRootDir: __dirname, // Helps resolve paths correctly
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "@typescript-eslint/no-floating-promises": "error",
  },
  ignorePatterns: [".eslintrc.js", "node_modules", "dist"], // Ignore config files
};
