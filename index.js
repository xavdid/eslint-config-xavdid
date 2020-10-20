module.exports = {
  extends: [
    "standard-with-typescript",
    // this line prints a warning in non-react projects
    // I think the extra log lines are worth not needing to configure anything
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    // prettier stuff should go last, since it turns off rules others may have turned on
    // order in the prettier section doesn't matter
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
        // might tighten this to "allowTypedFunctionExpressions" per
        // https://stackoverflow.com/a/56714344/1825390
        // (though that's untested)
        "@typescript-eslint/explicit-function-return-type": 0,
      },
    },
  ],
  // this will be the default in the future
  settings: {
    react: {
      version: "detect",
    },
  },
};
