import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ButtonCheck from "./components/utils/ButtonCheck.vue";
import AlertWarn from "./components/utils/AlertWarn.vue";
import "./index.css";

const app = createApp(App);

app.component("ButtonCheck", ButtonCheck)
  .component("AlertWarn", AlertWarn);
app.use(router);

app.mount("#app");
