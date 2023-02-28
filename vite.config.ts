import path from "path";
import { defineConfig } from "vite";
import lightningcss from "vite-plugin-lightningcss";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import * as pkg from "./package.json";

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths(), lightningcss({})],
  build: process.env.BUILD_LIB
    ? {
        lib: {
          entry: [path.resolve(__dirname, "src/index.ts")],
          formats: ["es", "cjs"],
          fileName: "index",
        },
        rollupOptions: {
          output: { assetFileNames: "index.css" },
          external: [
            ...Object.keys(pkg.dependencies),
            ...Object.keys(pkg.peerDependencies),
            "solid-js",
            "solid-js/web",
            "solid-js/store",
          ],
        },
      }
    : {},
});
