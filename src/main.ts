import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { Icon } from "@iconify/vue";

// #region : CSS
import "normalize.css";
import "@/assets/css/variables.css";
import "@/assets/css/transition.css";
import "@/assets/css/main.css";
//  #endregion

const app = createApp(App);

// Vue Plugins
app.use(createPinia());
app.use(router);

// Global Component
app.component("Icon", Icon);

// Mount it
app.mount("#app");
