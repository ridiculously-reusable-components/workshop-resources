import Vue from 'vue'
import CompositionApi from '@vue/composition-api'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AppButton from '@/components/AppButton'
import AppModal from '@/components/AppModal'
import PulseLoader from '@/components/PulseLoader'
import './assets/tailwind.css'

Vue.use(CompositionApi)

library.add(fas)

Vue.component('AppIcon', FontAwesomeIcon)
Vue.component('AppButton', AppButton)
Vue.component('AppModal', AppModal)
Vue.component('PulseLoader', PulseLoader)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
