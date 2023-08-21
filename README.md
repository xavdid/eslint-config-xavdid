# eslint-config-xavdid

Lint your code just like I do.

## Contents

I'm sort of particular when it comes to [ESLint](https://eslint.org/) configs. I mostly like [Standard](https://standardjs.com/), but appreciate the power of [Prettier](https://prettier.io/) when it comes to formatting.

This also includes some great plugins that don't come standard with Standard, such as for React and Jest.

The default config is for regular TypeScript packages. There's also a React-specific config available.

## Installation

```
yarn add --dev @xavdid/eslint-config
```

You'll also need to make sure `typescript` and `eslint` are available.

## Usage

When used, your `.eslintrc.js` should be something like:

```js
module.exports = {
  root: true,
  // don't lint this file
  // https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
  ignorePatterns: [".eslintrc.js"],
  extends: "@xavdid",
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
  rules: {
    // disable rules individually as needed
    // "@typescript-eslint/explicit-function-return-type": 0,
  },
};
```

For the React-specific config, use:

```js
module.exports = {
  root: true,
  // don't lint this file
  // https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
  ignorePatterns: [".eslintrc.js"],
  extends: "@xavdid/eslint-config/react",
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
  rules: {
    // disable rules individually as needed
    // "@typescript-eslint/explicit-function-return-type": 0,
  },
};
```

Note the longer `extends` value, based on the rules described in [this doc](https://eslint.org/docs/developer-guide/shareable-configs#sharing-multiple-configs).

## Upcoming Changes

There are configuration changes coming in eslint@9, [detailed here](https://eslint.org/docs/latest/use/configure/configuration-files). On `2023-08-20`, it had a callout:

> We are transitioning to a new config system in ESLint v9.0.0. The config system shared on this page is currently the default but will be deprecated in v9.0.0. You can opt-in to the new config system by following the instructions in the [documentation](https://eslint.org/docs/latest/use/configure/configuration-files-new).

There's a 3-part series explaining how it works:

1. https://eslint.org/blog/2022/08/new-config-system-part-1/
2. https://eslint.org/blog/2022/08/new-config-system-part-2/
3. https://eslint.org/blog/2022/08/new-config-system-part-3/

Those changes will likely change (and improve) the way this configuration works and will require some major changes.
