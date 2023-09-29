import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Unplugin Tools
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VueUseComponentsResolver, VueUseDirectiveResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    AutoImport({
      dts: true,
      imports: [
        "vue",
        "@vueuse/core",
      ],
      vueTemplate: true,
    }),
    Components({
      dts: true,
      version: 3,
      resolvers: [
        VueUseComponentsResolver(),
        VueUseDirectiveResolver()
      ],
      types: [
        {
          from: "@iconify/vue",
          names: ["Icon"],
        },
      ],
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  esbuild: {
    drop: mode === "production" ? ["debugger"] : [],
    pure: mode === "production" ? ["console.log", "console.debug"] : [],
  },
}));
