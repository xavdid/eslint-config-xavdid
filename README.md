# eslint-config-xavdid

Format your code just like I do.

## Contents

I'm sort of particular when it comes to [ESLint](https://eslint.org/) configs. I mostly like [Standard](https://standardjs.com/), but appreciate the power of [Prettier](https://prettier.io/) when it comes to formatting.

This also includes some great plugins that don't come standard with Standard, such as for React and Jest.

## Installation

```
yarn add eslint-config-xavdid
```

You'll also need to manually install the `peerDependencies`. Run the following:

```
npx install-peerdeps --dev eslint-config-xavdid
```

Keep an eye on [eslint/eslint#13481](https://github.com/eslint/eslint/issues/13481), which will (hopefully) make the installation process a lot simpler.

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
