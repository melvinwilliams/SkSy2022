module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:unicorn/recommended",
  ],
  plugins: ["eslint-plugin-unicorn", "svelte3"],
  ignorePatterns: ["*.cjs"],
  overrides: [{files: ["*.svelte"], processor: "svelte3/svelte3"}],
  rules: {
    "unicorn/filename-case": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/number-literal-case": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-await-expression-member": "off",
    "unicorn/prefer-object-from-entries": "off",
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        replacements: {
          ref: false,
          i: false,
        },
      },
    ],
    "unicorn/no-nested-ternary": "off",
    "unicorn/better-regex": "off",
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
}
