import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue } from "bootstrap-vue";
import directives from "@/directives";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(directives);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
