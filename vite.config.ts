import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  base: "/teaboom/",
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, "src/styles")],
        additionalData: `
          @use "breakpoints" as *;
          @use "mixins" as *;
        `,
      },
    },
  },
});
