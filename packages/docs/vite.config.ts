import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import * as path from "node:path";

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths()],
  resolve: {
    alias: [
      {
        find: "@danteissaias/ds",
        replacement: path.resolve(__dirname, "../ds/"),
      },
    ],
  },
});
