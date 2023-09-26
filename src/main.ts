import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import { Icon } from "@iconify/vue";

// #region : CSS
import "normalize.css";
import "@/assets/css/variable.scss";
import "@/assets/css/transition.scss";
import "@/assets/css/main.scss";
//  #endregion

// #region : Type
import type { Plugin } from "vue";
//  #endregion

const app = createApp(App);

// Vue Plugins
app.use(createPinia());
app.use(router);
app.use(i18n);

// Global Component
app.component("Icon", Icon);

// Google Analytics
const gtag = import.meta.glob("/node_modules/vue-gtag/dist/vue-gtag.esm.js", { eager: true, import: "default" });
if (gtag.length) {
  const gtagPlugin = Object.values(gtag)[0] as Plugin;
  app.use(gtagPlugin, {
    config: {
      id: "###"  // Change to yout Google Analytics ID
    },
  }, router);
} else {
  console.info("Skip vue-gtag as not installed");
}

// Mount it
app.mount("#app");
