import path from "path";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import builtins from "rollup-plugin-node-builtins";
import globals from "rollup-plugin-node-globals";
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import image from "@rollup/plugin-image";

module.exports = {
  input: path.resolve(__dirname, "./src/index.ts"),
  output: {
    file: path.resolve(__dirname, "./dist/bundle.js"),
    format: "cjs"
  },
  plugins: [
    resolve({ extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".css"], preferBuiltins: true }),
    commonjs(),
    globals(),
    builtins(),
    typescript(),
    babel({ exclude: "node_modules/**" }),
    postcss({ extract: false, use: ["sass"] }),
    image(),
    terser()
  ],
  watch: { chokidar: { usePolling: true } },
  external: ["react", "react-dom", "react-router-dom", "formik"]
};
