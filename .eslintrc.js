module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'eqeqeq': [2, 'always', { 'null': 'ignore' }],
    'no-alert': 1
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
