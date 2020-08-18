import Vue from 'vue'
import App from './App.vue'
import Tags from "npm-tagtt"

Vue.component("vtag",Tags)

new Vue({
  el: '#app',
  render: h => h(App)
})
