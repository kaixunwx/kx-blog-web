import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from "./router/router";
import './router/index'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

// 自定义css样式
import './assets/styles/index.scss'

// animate.css
import animated from 'animate.css'
Vue.use(animated)

// prism代码高亮
import './assets/styles/prism.css'

// svg-icon
import './assets/icons' // icon

// store
import store from './store'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
