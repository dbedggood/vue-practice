import Vue from 'vue'
import { VLazyImagePlugin } from 'v-lazy-image'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VLazyImagePlugin)

new Vue({
  render: h => h(App)
}).$mount('#app')
