module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            screens: "./app/screens",
            navigation: "./app/navigation",
          },
        },
      ],
    ],
  };
};
