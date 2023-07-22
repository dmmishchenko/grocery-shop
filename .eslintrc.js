module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.*?.json'],
        createDefaultProgram: true
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        './node_modules/gts/',
        'plugin:prettier/recommended',
        'prettier',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
      rules: {
        //here we can disable or configure some rules
        '@angular-eslint/component-class-suffix': [
          'warn',
          { suffixes: ['Component', 'Service', 'Page'] }
        ],
        '@angular-eslint/no-output-on-prefix': 'off',
        'for-direction': 'off',
        'no-case-declarations': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/no-explicit-any': ['warn']
      }
    },
    {
      files: ['*.component.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates']
    }
  ]
}
