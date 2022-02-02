module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        React: "writable",
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "react-hooks", "prettier"],
    settings: {
        react: {
            version: "detect",
        },
    },
    /**
     * This section is meant for custom linting rules to be added.
     * Note: Some linting rules are already implemented with Prettier.
     */
    rules: {
        // "linebreak-style": ["error", "unix"],
        "react/react-in-jsx-scope": 0, // Next.js does not need React to be in scope.
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ], // Integrates Prettier with ESLint and lets both run at the same time.
        "no-unused-vars": "off",
        "react/prop-types": [0], // Requiring prop types is something I want to figure out first.
    },
};
