module.exports = {
  plugins: [
    "standard-with-typescript",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  rules: {
    // this requires explicit checks against null instead of otherwise safe check
    "@typescript-eslint/strict-boolean-expressions": [
      "error",
      {
        allowNullableBoolean: true,
        allowNullableString: true,
      },
    ],
  },
};
