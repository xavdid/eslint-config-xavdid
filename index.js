const { plugins, rules } = require("./common/_base");

module.exports = {
  extends: [
    ...plugins,
    // prettier should go last, since it turns off rules others may have turned on
    // the root "prettier" has all rules for its various plugins (standard, react, etc)
    "prettier",
  ],
  rules,
};
