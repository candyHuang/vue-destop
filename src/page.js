import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import es6Promise from 'es6-promise'
import 'element-ui/lib/theme-default/index.css'

import LayoutHeader from './components/layout/LayoutHeader.vue'
import LayoutFooter from './components/layout/LayoutFooter.vue'
import LayoutSidebar from './components/layout/LayoutSidebar.vue'
import LayoutMain from './components/layout/LayoutMain.vue'
import LayoutToolbar from './components/layout/LayoutToolbar.vue'
import Panel from './components/panel/Panel.vue'
import PanelTable from './components/panel/PanelTable.vue'
import DiamondButton from 'components/button/DiamondButton.vue'
import ButtonGroup from 'components/button/ButtonGroup.vue'
import TabsLink from 'components/tabs-link/TabsLink.vue'
import TabsLinkItem from 'components/tabs-link/TabsLinkItem.vue'


import SearchForm from 'components/form/SearchForm.vue'
import SearchFormToggle from 'components/form/SearchFormToggle.vue'

import './assets/styles/common.less'
import Api from './api/index.js'

// Promise
es6Promise.polyfill()


Vue.use(VueRouter)
Vue.use(Element)

Vue.component(LayoutHeader.name, LayoutHeader)
Vue.component(LayoutSidebar.name, LayoutSidebar)
Vue.component(LayoutFooter.name, LayoutFooter)
Vue.component(LayoutMain.name, LayoutMain)
Vue.component(LayoutToolbar.name, LayoutToolbar)
Vue.component(Panel.name, Panel)
Vue.component(PanelTable.name, PanelTable)
Vue.component(DiamondButton.name, DiamondButton)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(SearchForm.name, SearchForm)
Vue.component(SearchFormToggle.name, SearchFormToggle)
Vue.component(TabsLink.name, TabsLink)
Vue.component(TabsLinkItem.name, TabsLinkItem)

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
