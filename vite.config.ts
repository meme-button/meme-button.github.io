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
        "vue-router",
        "@vueuse/core",
        "vue-i18n",
        { "@/i18n": ["$t", "$d", "$n", "$locale", "_changeLang"] },
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
          from: "vue-router",
          names: ["RouterLink", "RouterView"],
        },
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
