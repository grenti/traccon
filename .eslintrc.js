module.exports = {
  env: {
    jest: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    "plugin:typescript-sort-keys/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "typescript-sort-keys", "storybook"],
  root: true,
  rules: {
    "no-console": "error",
    "no-fallthrough": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-unused-vars": [
      2,
      {
        args: "after-used",
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
    "react-hooks/exhaustive-deps": "error",
    "sort-imports": "off",
    "import/named": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", ["sibling", "parent"], "index"],
      },
    ],
    "prefer-destructuring": [
      "error",
      { AssignmentExpression: { array: false, object: false } },
    ],
  },
  overrides: [
    {
      files: ["*.test.ts", "*.test.tsx"],
      rules: {
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "react-hooks/exhaustive-deps": "error",
      },
    },
    {
      files: ["*.stories.tsx"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "react-hooks/exhaustive-deps": "error",
      },
    },
    {
      files: ["utils/mocks/**/*.ts"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
