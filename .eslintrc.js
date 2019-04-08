module.exports = {
    "extends": ["eslint:recommended", "plugin:jest/recommended"],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    },
    "plugins": [
        "react",
        "jest"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6
    },
    "env": {
        "jest": true,
        "node": true,
    }
};