import Vue from 'vue'
import App from './App.vue'
// import Vant from 'vant'
import 'vant/lib/index.css'
import { Button, Field, Form, Toast } from 'vant'
import 'amfe-flexible'
import './styles/common.less'
import './styles/iconfont.less'
import router from './router'
import HmHeader from './components/HmHeader.vue'
import HmLogo from './components/HmLogo.vue'
import axios from 'axios'

// 把axios挂在到vue的原型
Vue.prototype.$axios = axios
// 配置axios的默认基准地址
axios.defaults.baseURL = 'http://localhost:3000'
// 把vant中所有的组件都导入了
// Vue.use(Vant)
Vue.use(Button)
Vue.use(Field)
Vue.use(Form)
Vue.use(Toast)
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', HmLogo)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
