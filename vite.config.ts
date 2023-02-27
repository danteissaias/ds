import path from "path";
import { defineConfig } from "vite";
import lightningcss from "vite-plugin-lightningcss";
import solidPlugin from "vite-plugin-solid";
import tsconfigPaths from "vite-tsconfig-paths";
import * as pkg from "./package.json";

export default defineConfig({
  plugins: [
    solidPlugin(),
    tsconfigPaths(),
    lightningcss({
      customAtRules: {
        breakpoints: {
          prelude: null,
          body: "rule-list",
        },
      },
      visitor: {
        Rule: {
          custom: {
            breakpoints({ body }) {
              const value: any[] = [];

              for (let rule of body.value) {
                const clone = structuredClone(rule);
                // @ts-ignore
                clone.value.selectors[0][0].name = `sm:${rule.value.selectors[0][0].name}`;

                value.push(rule);
                value.push({
                  type: "media",
                  value: {
                    rules: [clone],
                    loc: { source_index: 0, line: 0, column: 0 },
                    query: {
                      mediaQueries: [
                        {
                          qualifier: null,
                          mediaType: "all",
                          condition: {
                            type: "feature",
                            value: {
                              type: "plain",
                              name: "min-width",
                              value: {
                                type: "length",
                                value: {
                                  type: "value",
                                  value: {
                                    unit: "px",
                                    value: 640,
                                  },
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                });
              }

              // console.log(JSON.stringify(rule.body.value[0]));

              return value;
            },
          },
        },
      },
    }),
  ],
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
