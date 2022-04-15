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

export default {
  input: [
    "src/widgets/action-bar/action-bar",
    "src/widgets/breadcrumbs/breadcrumbs",
    "src/widgets/busy-button/busy-button",
    "src/widgets/calendar/calendar",
    "src/widgets/checkbox-field/checkbox-field",
    "src/widgets/confirm-button/confirm-button",
    "src/widgets/custom-field/custom-field",
    "src/widgets/date-field/date-field",
    "src/widgets/date-picker/date-picker"
    // "src/widgets/dialog-provider/dialog-provider-context",
    // "src/widgets/dialog-provider/dialog-provider",
    // "src/widgets/dropdown-field/dropdown-field",
    // "src/widgets/field-decoration/field-decoration",
    // "src/widgets/file-field/file-field",
    // "src/widgets/file-picker/file-picker",
    // "src/widgets/flash-provider/flash-provider-context",
    // "src/widgets/flash-provider/flash-provider",
    // "src/widgets/infinite-list/infinite-list",
    // "src/widgets/loader/loader",
    // "src/widgets/local-storage-provider/local-storage-provider-context",
    // "src/widgets/local-storage-provider/local-storage-provider",
    // "src/widgets/month-date-field/month-date-field",
    // "src/widgets/month-date-picker/month-date-picker",
    // "src/widgets/multi-date-field/multi-date-field",
    // "src/widgets/multi-date-picker/multi-date-picker",
    // "src/widgets/multi-select-field/multi-select-field",
    // "src/widgets/object-view/object-view",
    // "src/widgets/pagination/pagination",
    // "src/widgets/password-field/password-field",
    // "src/widgets/popup-menu/popup-menu",
    // "src/widgets/table-view/table-view",
    // "src/widgets/text-area-field/text-area-field",
    // "src/widgets/text-editor-field/text-editor-field",
    // "src/widgets/text-field/text-field",
    // "src/widgets/time-field/time-field",
    // "src/widgets/time-picker/time-picker",
    // "src/utils/debounce/debounce",
    // "src/utils/use-countdown/use-countdown",
    // "src/utils/use-infinite-list/use-infinite-list",
    // "src/utils/use-query-params/use-query-params",
    // "src/utils/use-window-breakpoints/use-window-breakpoints"
  ],
  output: {
    dir: path.resolve(__dirname, "./dist"),
    format: "es"
  },
  plugins: [
    resolve({
      extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".css"],
      preferBuiltins: true
    }),
    commonjs(),
    globals(),
    builtins(),
    typescript({ declaration: true }),
    babel({ exclude: "node_modules/**" }),
    postcss({ extract: false, use: ["sass"] }),
    image(),
    terser()
  ],
  watch: { chokidar: { usePolling: true } },
  external: ["react", "react-dom", "react-router-dom", "formik"]
};
