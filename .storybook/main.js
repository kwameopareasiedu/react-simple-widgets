module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    addons: ["@storybook/addon-actions/register", "@storybook/addon-knobs/register"],
    webpackFinal: async config => {
        config.module.rules = config.module.rules.filter(rule => rule.test.toString().indexOf("svg") === -1);
        config.module.rules = config.module.rules.filter(rule => rule.test.toString().indexOf("scss") === -1);
        config.module.rules = config.module.rules.filter(rule => rule.test.toString().indexOf("css") === -1);
        config.module.rules = config.module.rules.filter(rule => rule.test.toString().indexOf("tsx") === -1);

        config.module.rules.unshift(
            {
                test: /\.s?css$/,
                exclude: /\node_modules/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "postcss-loader", options: { plugins: () => [require("autoprefixer")] } },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.tsx?/,
                exclude: /\node_modules/,
                use: [{ loader: "babel-loader" }, { loader: "ts-loader" }]
            },
            { test: /\.svg/, exclude: /\node_modules/, use: "url-loader" }
        );

        config.resolve.extensions.push(".tsx", ".ts", ".jsx", ".js", ".scss", ".svg");

        return config;
    }
};
