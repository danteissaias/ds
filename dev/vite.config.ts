import { defineConfig } from "vite";
import lightningcss from "vite-plugin-lightningcss";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [solidPlugin(), tsconfigPaths(), lightningcss()],
});
