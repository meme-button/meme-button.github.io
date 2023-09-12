import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// #region : CSS
import "normalize.css";
import "@/assets/css/variables.css";
import "@/assets/css/transition.css";
import "@/assets/css/main.css";
//  #endregion

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
