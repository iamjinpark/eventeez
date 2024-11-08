module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiker-macros": true,
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "vue/no-unused-vars": "warn", // 사용하지 않는 변수를 경고로 표시
    "vue/no-deprecated-vue-options-api": "error", // Composition API 관련 누락 경고
    "vue/valid-template-root": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": [
      // prettier 룰 추가
      "error",
      {
        singleQuote: true,
        semi: true,
        useTabs: true,
        tabWidth: 2,
        trailingComma: "all",
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: "avoid",
        endOfLine: "auto",
      },
    ],
  },
};
