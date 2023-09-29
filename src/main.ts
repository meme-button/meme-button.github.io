import { createApp } from "vue";
import App from "./App.vue";
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

// Global Component
app.component("Icon", Icon);

// Google Analytics
// const gtag = import.meta.glob("/node_modules/vue-gtag/dist/vue-gtag.esm.js", { eager: true, import: "default" });
// if (gtag.length) {
//   const gtagPlugin = Object.values(gtag)[0] as Plugin;
//   app.use(gtagPlugin, {
//     config: {
//       id: "###"  // Change to yout Google Analytics ID
//     },
//   });
// } else {
//   console.info("Skip vue-gtag as not installed");
// }

// Mount it
app.mount("#app");
