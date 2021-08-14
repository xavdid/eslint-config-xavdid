module.exports = {
  extends: [
    "standard-with-typescript",
    // this line prints a warning in non-react projects
    // I think the extra log lines are worth not needing to configure anything
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    // prettier should go last, since it turns off rules others may have turned on
    // the root "prettier" has all rules for its various plugins (standard, react, etc)
    "prettier",
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
  // `eslint-config-react` gives warnings if:
  // * the below property isn't here
  // * react isn't installed
  // so there's basically always some warning if we ship with react plugin enabled
  // lint is mostly in-editor and in CI, so that's fine
  // it seems like in the future, "detect" will be the default and we may not need this
  settings: {
    react: {
      version: "detect",
    },
  },
};
