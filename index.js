module.exports = {
  "env": {
    "node": true,
    "mocha": true,
  },

  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
    }
  },

  "rules": {
    "max-len": [2, 120, 2],
    "quotes": [2, "single"],
    "complexity": [2, 50],
    "curly": 2,
    "no-lonely-if": 2,
    "no-multiple-empty-lines": [2, { "max": 1} ],
    "no-nested-ternary": 2,
    "quote-props": [2, "as-needed"],
    "guard-for-in": 2,
    "keyword-spacing": [2, {"before": true, "after": true, "overrides": {}}],
    "space-before-blocks": 2,
    "space-before-function-paren": [2, {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
    "object-curly-spacing": [2, "never"],
    "array-bracket-spacing": [2, "never"],
    "computed-property-spacing": [2, "never"],
    "space-in-parens": [2, "never"],
    "no-underscore-dangle": [0],
    "no-extra-parens": 2,
    "indent": [2, 2, {"SwitchCase": 1}],
    "consistent-this": [1, "that"],
    "operator-assignment": [2, "always"],
    "semi": [2, "always"],
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "default-case": 2,
    "no-eq-null": 2,
    "no-floating-decimal": 2,
    "no-self-compare": 2,
    "no-throw-literal": 2,
    "radix": 2,
    "yoda": [2, "never"],
    "strict": [2, "global"],
    "new-cap": 0,
    "comma-spacing": [2, {"before": false, "after": true}],
    "comma-dangle": [2, "always-multiline"],
    "eqeqeq": [2, "always"],
    "no-extra-semi": 2
  }
}

