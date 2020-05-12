// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
*/
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Index from './components/Index.vue'
import Layout from './components/Layout'
Vue.config.productionTip = false
Vue.use(ElementUI)
import  VueResource  from 'vue-resource'
Vue.use(VueResource)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

Vue.config.productionTip = false
/*
new Vue(

,{
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
}, 
*/
//  {
//   el: '#app',
//   router,
//   components: { Index },
//   template: '<Index/>'
// }
/*
{
  el: '#footer',
  router,
  components: {Footer},
  template: '<Footer/>'
},

)

*/