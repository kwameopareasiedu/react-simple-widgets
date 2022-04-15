module.exports = {
  core: {
    builder: "webpack5"
  },
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-actions"],
  webpackFinal: async config => {
    // Add rules for scss, tsx and svg giles
    config.module.rules.push(
      {
        test: /\.s?css$/,
        exclude: /\node_modules/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.tsx?/,
        exclude: /\node_modules/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "ts-loader",
            options: { transpileOnly: true }
          }
        ]
      },
      {
        test: /\.svg/,
        exclude: /\node_modules/,
        use: "url-loader"
      }
    );

    return config;
  }
};
