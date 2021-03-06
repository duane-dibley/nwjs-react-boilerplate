module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'import',
    'lodash',
    'react',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  rules: {
    /* Possible Errors */
    'for-direction': 'error',
    'getter-return': 'error',
    'no-compare-neg-zero': 'error',
    'no-constant-condition': [2, {
      checkLoops: false,
    }],
    'no-cond-assign': [2, 'except-parens'],
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-extra-semi': 'error',
    'no-irregular-whitespace': ['error', {
      skipStrings: true,
    }],
    'no-obj-calls': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    /* Possible ES6 Errors */
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-func-assign': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-rename': 'error',

    /* Best Practices */
    'block-scoped-var': 'error',
    'dot-location': [2, 'property'],
    'dot-notation': 'error',
    'guard-for-in': 'error',
    'linebreak-style': ['error', (require('os').EOL === '\r\n' ? 'windows' : 'unix')],
    'max-len': [1, 120, 2, {
      ignoreComments: true,
    }],
    'no-caller': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-octal': 'error',
    'no-redeclare': 'error',
    'no-self-assign': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'yoda': [2, 'never', {
      exceptRange: true,
    }],

    /* Code Style */
    'arrow-spacing': 'error',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'ignore'
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'eol-last': ['error', 'always'],
    'indent': ['error', 2, {
      CallExpression: {arguments: 1},
      ignoreComments: true,
      SwitchCase: 1,
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    }],
    'keyword-spacing': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 2,
    }],
    'no-multiple-empty-lines': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'prefer-const': 'error',
    'semi': ['error', 'always', {
      omitLastInOneLineBlock: true,
    }],
    'semi-spacing': ['error', {
      before: false,
      after: true,
    }],
    'space-in-parens': ['error', 'never'],
    'spaced-comment': ['error', 'always', {
      exceptions: ['-', '+', '*'],
    }],
    'switch-colon-spacing': ['error', {
      after: true,
      before: false,
    }],

    /* Module Import */
    'import/first': 'error',
    'import/no-absolute-path': 'error',
    // 'import/no-default-export': 'error',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-self-import': 'error',
    'import/no-unresolved': 'error',
    'import/no-useless-path-segments': 'error',

    /* Lodash */
    'lodash/import-scope': [2, 'method'],
    'lodash/path-style': [2, 'string'],
    'lodash/prefer-get': 'error',
    'lodash/prefer-lodash-typecheck': 'error',
    'lodash/prefer-noop': 'error',

    /* React */
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-spacing': ['error', {when: 'never'}],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': [1, {'extensions': ['.js']}],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-handler-names': ['error', {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-max-props-per-line': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-bind': 'error',
    // 'react/jsx-one-expression-per-line': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens',
      assignment: 'parens',
      return: 'parens',
      arrow: 'parens',
      condition: 'parens-new-line',
      logical: 'ignore',
      prop: 'ignore',
    }],
    'react/no-children-prop': 'error',
    'react/no-direct-mutation-state': 'error',
    // 'react/no-danger': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': ['error', {
      component: true,
      html: true,
    }],
    'react/void-dom-elements-no-children': 'error',
  },
};
