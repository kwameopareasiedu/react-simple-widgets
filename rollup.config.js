import path from "path";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import image from "@rollup/plugin-image";
import sass from "rollup-plugin-sass";

module.exports = {
    input: path.resolve(__dirname, "./src/index.ts"),
    output: {
        file: path.resolve(__dirname, "./dist/bundle.js"),
        format: "cjs"
    },
    plugins: [
        resolve({ extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".css"], preferBuiltins: true }),
        commonjs({ namedExports: { "node_modules/react-is/index.js": ["isValidElementType", "isContextConsumer"] } }),
        babel({ exclude: "node_modules/**" }),
        typescript(),
        sass({
            insert: true,
            processor: css =>
                postcss([autoprefixer])
                    .process(css, { from: "undefined" })
                    .then(result => result.css)
        }),
        image(),
        terser()
    ],
    watch: { chokidar: { usePolling: true } },
    external: ["react", "react-router-dom", "formik"]
};
