module.exports = {
    core: {
        builder: "webpack5"
    },
    // stories: ["../src/**/*.stories.tsx"],
    stories: [
        "../src/widgets/dialog-provider/*.stories.tsx",
        "../src/widgets/flash-provider/*.stories.tsx",
        "../src/widgets/local-storage-provider/*.stories.tsx",
        "../src/widgets/popup-menu/*.stories.tsx",
        "../src/widgets/table-view/*.stories.tsx",
        "../src/widgets/pagination/*.stories.tsx",
        "../src/widgets/loader/*.stories.tsx",
        "../src/widgets/busy-button/*.stories.tsx",
        "../src/widgets/confirm-button/*.stories.tsx",
        "../src/widgets/breadcrumbs/*.stories.tsx",
        "../src/widgets/action-bar/*.stories.tsx",
        "../src/widgets/object-view/*.stories.tsx",
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
