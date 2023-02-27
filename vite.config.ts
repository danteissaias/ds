import path from "path";
import { defineConfig } from "vite";
import lightningcss from "vite-plugin-lightningcss";
import reactPlugin from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import * as pkg from "./package.json";

export default defineConfig({
  plugins: [
    reactPlugin(),
    tsconfigPaths(),
    lightningcss({ drafts: { nesting: true } }),
  ],
  css: { modules: {} },
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
          ],
        },
      }
    : {},
});
