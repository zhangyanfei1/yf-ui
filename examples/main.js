import Vue from 'vue'
import App from './App.vue'
import Yfui from '../packages/index'
Vue.config.productionTip = false
Vue.use(Yfui)
new Vue({
  render: h => h(App),
}).$mount('#app')
