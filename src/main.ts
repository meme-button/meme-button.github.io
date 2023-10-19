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

// Mount it
app.mount("#app");
