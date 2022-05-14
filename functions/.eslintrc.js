module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        "google",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.dev.json"],
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    ignorePatterns: [
        "/lib/**/*", // Ignore built files.
    ],
    plugins: ["@typescript-eslint", "import"],
    rules: {
        quotes: ["error", "double"],
        "quote-props": "off",
        "object-curly-spacing": "off",
        "comma-dangle": ["error", "only-multiline"],
        "import/no-unresolved": 0,
        indent: ["error", 4],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", {vars: "local"}],
        "arrow-parens": ["error", "as-needed"],
        "max-len": ["error", {code: 120, tabWidth: 4}],
    },
};
