module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            // duplicate in tsconfig.json
            screens: './app/screens',
            navigation: './app/navigation',
            components: './app/components',
          },
        },
      ],
    ],
  };
};
