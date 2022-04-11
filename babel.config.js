module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@controllers': './src/controllers',
        '@middlewares': './src/middlewares',
        '@models': './src/models',
        '@repositories': './src/repositories',
        '@routes': './src/routes',
        '@services': './src/services',
        '@types': './src/types',
      }
    }]
  ],
}
