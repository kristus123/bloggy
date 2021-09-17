import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: { id: 'UA-207866487-1' },
  }, app.router);
}