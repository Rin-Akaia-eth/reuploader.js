module.exports = {
	env: {
		es2021: true,
		jest: true,
		node: true,
	},

	extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],

	parserOptions: {
		ecmaVersion: 11,
		sourceType: "module",
		ecmaFeatures: { jsx: true },
	},

	plugins: [
		"import",
		"react",
		"unicorn",
		"unused-imports",
		"eslint-plugin-import-order-alphabetical",
		"sort-destructure-keys",
	],

	rules: {
		"unicorn/filename-case": ["error", { case: "kebabCase" }],
		"comma-dangle": ["warn", "only-multiline"],
		"default-param-last": "error",
		"import/extensions": ["error", "ignorePackages"],
		"import/no-default-export": "error",
		"import-order-alphabetical/order": ["error", { "newlines-between": "always" }],
		"max-lines": ["error", { max: 150, skipBlankLines: true, skipComments: true }],
		"no-duplicate-imports": ["error", { includeExports: true }],
		"no-loop-func": "error",
		"no-param-reassign": "error",
		"no-undef": "error",
		"no-unused-vars": "off",
		"unused-imports/no-unused-imports": "error",

		"unused-imports/no-unused-vars": [
			"warn",
			{ vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
		],

		"no-var": "error",
		"object-shorthand": ["error", "always", { avoidQuotes: true }],

		/* https://eslint.org/docs/rules/padding-line-between-statements */
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: ["const", "let", "var"], next: "*" },
			{ blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"] },
			{ blankLine: "always", prev: "var", next: "return" },
			{ blankLine: "always", prev: ["case", "default"], next: "*" },
			{ blankLine: "always", prev: "*", next: "block-like" },
			{ blankLine: "always", prev: "block-like", next: "*" },
		],

		"prefer-arrow-callback": "error",
		"prefer-const": ["error", { destructuring: "any", ignoreReadBeforeAssign: false }],
		"prefer-destructuring": ["error", { array: true, object: true }],
		"react/display-name": "off",
		"react/prop-types": "off",
		"sort-destructure-keys/sort-destructure-keys": ["error", { caseSensitive: true }],

		"sort-imports": [
			"error",
			{
				allowSeparatedGroups: true,
				ignoreCase: true,
				ignoreDeclarationSort: true,
			},
		],

		"sort-keys": ["error", "asc", { caseSensitive: true, natural: true }],
		"unicorn/no-array-for-each": "off",
		"unicorn/no-for-loop": "error",
		"unicorn/prefer-ternary": "error",

		"unicorn/prevent-abbreviations": [
			"error",
			{
				replacements: {
					args: false,
					cmd: { command: true },
					e: { event_: true },
					fn: false,
					func: false,
					i18n: false,
					lib: false,
					params: false,
					prop: false,
					props: false,
					str: false,
				},
			},
		],

		"vars-on-top": ["error"],
	},

	settings: {
		react: {
			version: "detect",
		},
	},
}
