module.exports = {
    core: {
        builder: "webpack5"
    },
    // stories: ["../src/**/*.stories.tsx"],
    stories: [
        "../src/dialog-provider/*.stories.tsx",
        "../src/flash-provider/*.stories.tsx",
        "../src/local-storage-provider/*.stories.tsx",
        "../src/popup-menu/*.stories.tsx",
        "../src/table-view/*.stories.tsx",
        "../src/pagination/*.stories.tsx",
        "../src/loader/*.stories.tsx",
        "../src/busy-button/*.stories.tsx",
        "../src/confirm-button/*.stories.tsx",
        "../src/breadcrumbs/*.stories.tsx",
    ],
    addons: ["@storybook/addon-actions", "@storybook/addon-knobs"],
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
            { test: /\.svg/, exclude: /\node_modules/, use: "url-loader" }
        );

        config.resolve.extensions.push(".tsx", ".ts", ".jsx", ".js", ".scss", ".svg");

        return config;
    }
};
