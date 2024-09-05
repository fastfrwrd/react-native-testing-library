module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '18',
        },
        useBuiltIns: false,
        modules: 'commonjs',
      },
    ],
    [
      '@babel/preset-react',
      // { runtime: 'automatic' },
    ],
    '@babel/preset-typescript',
    '@babel/preset-flow',
  ],
  plugins: ['@babel/plugin-transform-strict-mode'],
};
