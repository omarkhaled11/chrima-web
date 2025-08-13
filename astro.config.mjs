// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://chrima.app",
  image: {
    domains: ["chrima.app"],
    remotePatterns: [{ protocol: "https" }],
  },
  integrations: [
    compress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          collapseWhitespace: true,
          conservativeCollapse: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true,
        },
      },
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
});
