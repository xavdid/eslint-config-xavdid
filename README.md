# eslint-config-xavdid

Lint your code just like I do.

## Contents

I'm sort of particular when it comes to [ESLint](https://eslint.org/) configs. I mostly like [Standard](https://standardjs.com/), but appreciate the power of [Prettier](https://prettier.io/) when it comes to formatting.

This also includes some great plugins that don't come standard with Standard, such as for React and Jest.

## Installation

```
yarn add --dev eslint-config-xavdid
```

You'll also need to make sure `typescript` and `eslint` are available.

## Usage

When used, your `.eslintrc.js` should be something like:

```js
module.exports = {
  root: true,
  extends: "xavdid",
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
};
```
