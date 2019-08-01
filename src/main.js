import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
//import VueRouter from "vue-router";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
//vue.use(VueRouter);
//vue.router = router;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
