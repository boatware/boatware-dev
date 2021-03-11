import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin, NavbarPlugin } from 'bootstrap-vue'
import './assets/scss/main.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(NavbarPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

/**
 * Prevents the page to be fully reloaded when an internal link is clicked.
 * Instead the router will be asked to handle the link like a <router-link>.
 * @param event {Event}
 */
function pushClickedLinks(event) {
  if (event.target.tagName === "A") {
    event.preventDefault();
    console.debug(event.target.getAttribute("href").match(/^\//));
    let href = event.target.getAttribute("href");
    if (href.match(/^\/[^/]/) !== undefined || (href.match(/^\//) !== undefined && href.length === 1)) {
      event.preventDefault();
      router.push({path: href, query: {lol: "lol"}});
    }
  }
}

if (document.addEventListener) {
  document.addEventListener("click", pushClickedLinks, false);
}

