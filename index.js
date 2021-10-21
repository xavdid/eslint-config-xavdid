const base = require("./common/_base");

module.exports = {
  extends: [
    ...base,
    // prettier should go last, since it turns off rules others may have turned on
    // the root "prettier" has all rules for its various plugins (standard, react, etc)
    "prettier",
  ],
};
