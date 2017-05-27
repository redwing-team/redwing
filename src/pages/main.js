import Vue from 'vue'
import Router from 'vue-router'
import plugins from '../utils/plugins'
import app from './app.vue'

Vue.use(plugins)
Vue.use(Router)

new Vue(app).$mount('#app')
