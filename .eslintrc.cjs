/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  plugins: [
    "vuejs-accessibility",
  ],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-typescript/recommended",
    "plugin:vuejs-accessibility/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  "rules": {
    "arrow-spacing": ["warn", { "before": true, "after": true }],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "comma-dangle": ["error", "only-multiline"],
    "comma-spacing": "error",
    "comma-style": "error",
    "curly": ["error", "multi-line", "consistent"],
    "dot-notation": "error",
    "eol-last": "error",
    "handle-callback-err": "off",
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "keyword-spacing": "error",
    "max-nested-callbacks": ["warn", { "max": 4 }],
    "max-statements-per-line": ["warn", { "max": 2 }],
    "no-case-declarations": "off",
    "no-console": "off",
    "no-undefined": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "error",
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "error",
    "no-floating-decimal": "error",
    "no-inline-comments": "off",
    "no-lonely-if": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": ["error", { ignoreEOLComments: true }],
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0, "maxBOF": 0 }],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "no-trailing-spaces": ["error"],
    "no-undef-init": "error",
    "no-undef": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-var": "warn",
    "object-curly-spacing": ["error", "always"],
    "prefer-const": "warn",
    "quotes": ["warn", "double"],
    "semi": ["error", "always"],
    "semi-spacing": ["error", { "before": false, "after": true }],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "switch-colon-spacing": "error",
    "yoda": "error",
    "vue/multi-word-component-names": "off",

    // vue-a11y
    "vuejs-accessibility/alt-text": "warn",
    "vuejs-accessibility/anchor-has-content": "warn",
    "vuejs-accessibility/aria-props": "warn",
    "vuejs-accessibility/aria-role": "warn",
    "vuejs-accessibility/aria-unsupported-elements": "warn",
    "vuejs-accessibility/click-events-have-key-events": "warn",
    "vuejs-accessibility/form-control-has-label": "warn",
    "vuejs-accessibility/heading-has-content": "warn",
    "vuejs-accessibility/iframe-has-title": "warn",
    "vuejs-accessibility/interactive-supports-focus": "warn",
    "vuejs-accessibility/label-has-for": "warn",
    "vuejs-accessibility/media-has-caption": "warn",
    "vuejs-accessibility/mouse-events-have-key-events": "warn",
    "vuejs-accessibility/no-access-key": "warn",
    "vuejs-accessibility/no-autofocus": "warn",
    "vuejs-accessibility/no-distracting-elements": "warn",
    "vuejs-accessibility/no-onchange": "warn",
    "vuejs-accessibility/no-redundant-roles": "warn",
    "vuejs-accessibility/no-static-element-interactions": "warn",
    "vuejs-accessibility/role-has-required-aria-props": "warn",
    "vuejs-accessibility/tabindex-no-positive": "warn"
  }
};
