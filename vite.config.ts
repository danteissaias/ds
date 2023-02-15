import * as path from "path";
import { defineConfig } from "vite";
import lightningcss from "vite-plugin-lightningcss";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import * as pkg from "./package.json";

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths(), lightningcss()],
  build: {
    lib: {
      entry: [path.resolve(__dirname, "src/index.ts")],
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      output: { assetFileNames: "index.css" },
      external: [
        ...Object.keys(pkg.dependencies),
        "solid-js",
        "solid-js/web",
        "solid-js/store",
      ],
    },
  },
});
