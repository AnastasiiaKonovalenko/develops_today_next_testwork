module.exports =  {
    parser:  '@typescript-eslint/parser',
    extends:  [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
        ecmaFeatures:  {
            jsx:  true,
        },
    },
    rules:  {
        "semi": "error",
        "@typescript-eslint/no-var-requires": 0,
        //"indent": ["error", 2]
    },
    settings:  {
        react:  {
            version:  'detect',
        },
    },
};