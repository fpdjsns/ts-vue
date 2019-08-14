// .eslintrc.js
module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "prettier"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    "sourceType": "module",
  },
  extends: [
    "prettier",
    "plugin:@typescript-eslint/recommended", // 추천해주는 typescript-eslint 룰 등록
    "prettier/@typescript-eslint",
    "plugin:vue/recommended",
  ],
  rules: {
    quotes: ["error", "single"],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};