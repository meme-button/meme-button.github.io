import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";

// #region : CSS
import "normalize.css";
import "@/assets/css/variable.scss";
import "@/assets/css/transition.scss";
import "@/assets/css/main.scss";
//  #endregion

const app = createApp(App);

// Vue Plugins
app.use(createPinia());
app.use(router);

// Global Component
app.component("Icon", Icon);

// Mount it
app.mount("#app");
