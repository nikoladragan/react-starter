module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. '@typescript-eslint/explicit-function-return-type': 'off',
    "react/prop-types": "off",
    quotes: [1, "double", { avoidEscape: true }],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "@typescript-eslint/explicit-function-return-type": "warn",
    "unused-imports/no-unused-imports-ts": "warn",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.styles.tsx", "*.styles.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
  plugins: ["prettier", "react-hooks", "unused-imports", "jest"],
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  env: {
    browser: true,
    node: true,
    "jest/globals": true,
  },
};
