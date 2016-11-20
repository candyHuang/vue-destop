import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import es6Promise from 'es6-promise'
import 'element-ui/lib/theme-default/index.css'

import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutSidebar from './components/LayoutSidebar.vue'
import TabsPageBox from 'components/TabsPageBox.vue'
import TabPage from 'components/TabPage.vue'
import SearchFormToggle from 'components/SearchFormToggle.vue'

import './assets/styles/common.less'
import Api from './api/index.js'

// Promise
es6Promise.polyfill()


Vue.use(VueRouter)
Vue.use(Element)

Vue.component(LayoutHeader.name, LayoutHeader)
Vue.component(LayoutSidebar.name, LayoutSidebar)
Vue.component(LayoutFooter.name, LayoutFooter)
Vue.component(TabsPageBox.name, TabsPageBox)
Vue.component(TabPage.name, TabPage)
Vue.component(SearchFormToggle.name, SearchFormToggle)


export default {
	init(app, routes = []) {
    const router = new VueRouter({
      routes
    })
    
		return new Vue({
      router,
		  render: h => h(app)
		}).$mount('#app')
	}
}
