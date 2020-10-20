module.exports = {
  extends: [
    "standard-with-typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    // // prettier stuff should go last, since it turns off rules others may have turned on
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "prettier/standard",
  ],
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        // don't need return types on function components
        "@typescript-eslint/explicit-function-return-type": 0,
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
