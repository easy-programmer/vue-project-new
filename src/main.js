// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueGoodTablePlugin from 'vue-good-table'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-good-table/dist/vue-good-table.css'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueGoodTablePlugin)
Vue.use(BootstrapVue)
Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
