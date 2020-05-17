import path from "path";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import sass from "rollup-plugin-sass";

module.exports = {
    input: path.resolve(__dirname, "./src/index.ts"),
    output: {
        file: path.resolve(__dirname, "./dist/bundle.js"),
        format: "cjs"
    },
    plugins: [
        resolve({ extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".css"] }),
        commonjs({ namedExports: { "node_modules/react-is/index.js": ["isValidElementType", "isContextConsumer"] } }),
        typescript({ objectHashIgnoreUnknownHack: true }),
        babel({ exclude: "node_modules/**" }),
        sass({
            insert: true,
            processor: css =>
                postcss([autoprefixer])
                    .process(css, { from: "undefined" })
                    .then(result => result.css)
        }),
        terser()
    ],
    watch: { chokidar: { usePolling: true } },
    external: ["react"]
};
