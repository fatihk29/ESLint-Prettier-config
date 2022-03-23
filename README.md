# VSCode ESLint, Prettier & Airbnb Style

npm init -y //

## LINT Package Names
#### @babel/core
#### @babel/eslint-parser
#### @babel/preset-react
#### eslint
#### eslint-config-airbnb
#### eslint-config-prettier
#### eslint-plugin-eslint-comments
#### eslint-plugin-import
#### eslint-plugin-jsx-a11y
#### eslint-plugin-prettier
#### eslint-plugin-react
#### eslint-plugin-react-hooks
#### prettier


## Rules 0
     "rules": {
    "prettier/prettier": 0,
    "no-use-before-define": "off",
    "no-case-declarations": "off",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": "off",
    "no-param-reassign": "off",
    "no-empty": "warn",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "react/jsx-props-no-spreading": "warn",
    "react/no-unescaped-entities": [
      "error",
      {
        "forbid": [
          ">",
          "}"
        ]
      }
    ],
    "jsx-a11y/label-has-associated-control": [
      "warn",
      {
        "depth": 3
      }
    ],
    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
    "no-console": 2
  },
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "sourceType": "module",
    "requireConfigFile": false,
    "allowImportExportEverywhere": true
  }
##  More Rules 1
      "rules": {
		"no-debugger": 0,
		"no-alert": 0,
		"no-await-in-loop": 0,
		"no-return-assign": ["error", "except-parens"],
		"no-restricted-syntax": [
			2,
			"ForInStatement",
			"LabeledStatement",
			"WithStatement"
		],
		"no-unused-vars": [
			1,
			{
				"ignoreRestSiblings": true,
				"argsIgnorePattern": "res|next|^err"
			}
		],
		"prefer-const": [
			"error",
			{
				"destructuring": "all"
			}
		],
		"arrow-body-style": [2, "as-needed"],
		"no-unused-expressions": [
			2,
			{
				"allowTaggedTemplates": true
			}
		],
		"no-param-reassign": [
			2,
			{
				"props": false
			}
		],
		"no-console": 0,
		"import/prefer-default-export": 0,
		"import": 0,
		"func-names": 0,
		"space-before-function-paren": 0,
		"comma-dangle": 0,
		"max-len": 0,
		"import/extensions": 0,
		"no-underscore-dangle": 0,
		"consistent-return": 0,
		"react/display-name": 1,
		"react/no-array-index-key": 0,
		"react/react-in-jsx-scope": 0,
		"react/prefer-stateless-function": 0,
		"react/forbid-prop-types": 0,
		"react/no-unescaped-entities": 0,
		"react/function-component-definition": 0,
		"jsx-a11y/accessible-emoji": 0,
		"jsx-a11y/label-has-associated-control": [
			"error",
			{
				"assert": "either"
			}
		],
		"react/require-default-props": 0,
		"react/jsx-filename-extension": [
			1,
			{
				"extensions": [".js", ".jsx", ".ts", ".tsx", ".mdx"]
			}
		],
		"radix": 0,
		"no-shadow": [
			2,
			{
				"hoist": "all",
				"allow": ["resolve", "reject", "done", "next", "err", "error"]
			}
		],
		"quotes": [
			2,
			"single",
			{
				"avoidEscape": true,
				"allowTemplateLiterals": true
			}
		],
		"prettier/prettier": [
			"error",
			{
				"trailingComma": "es5",
				"singleQuote": true,
				"printWidth": 80,
				// below line only for windows users facing CLRF and eslint/prettier error
				// non windows users feel free to delete it
				"endOfLine": "auto"
			}
		],
		"jsx-a11y/href-no-hash": "off",
		"jsx-a11y/anchor-is-valid": [
			"warn",
			{
				"aspects": ["invalidHref"]
			}
		],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"@typescript-eslint/comma-dangle": ["off"],
		"react/jsx-props-no-spreading": "off"
	}

  ##  More Rules 2

		"rules": {
    "arrow-body-style": ["error", "as-needed"],
    "class-methods-use-this": 0,
    "react/jsx-filename-extension": 0,
    "global-require": 0,
    "react/destructuring-assignment": 0,
    "import/named": 2,
    "linebreak-style": 0,
    "import/no-dynamic-require": 0,
    "import/no-named-as-default": 0,
    "import/no-unresolved": 2,
    "import/prefer-default-export": 0,
    "semi": [2, "always"],
    "max-len": [
      "error",
      {
        "code": 80,
        "ignoreUrls": true,
        "ignoreComments": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "new-cap": [
      2,
      {
        "capIsNew": false,
        "newIsCap": true
      }
    ],
    "no-param-reassign": 0,
    "no-shadow": 0,
    "no-tabs": 0,
    "no-underscore-dangle": 0,
    "react/forbid-prop-types": [
      "error",
      {
        "forbid": ["any"]
      }
    ],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "react/jsx-no-bind": [
      "error",
      {
        "ignoreRefs": true,
        "allowArrowFunctions": true,
        "allowBind": false
      }
    ],
    "react/no-unknown-property": [
      2,
      {
        "ignore": ["itemscope", "itemtype", "itemprop"]
      }
    ]
  }

