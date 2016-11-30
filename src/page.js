import Vue from 'vue'
import VueRouter from 'vue-router'
import Element from 'element-ui'
import es6Promise from 'es6-promise'
import 'element-ui/lib/theme-default/index.css'

import LayoutHeader from 'components/layout/LayoutHeader.vue'
import LayoutFooter from 'components/layout/LayoutFooter.vue'
import LayoutSidebar from 'components/layout/LayoutSidebar.vue'
import LayoutMain from 'components/layout/LayoutMain.vue'
import LayoutToolbar from 'components/layout/LayoutToolbar.vue'
import Panel from 'components/panel/Panel.vue'
import PanelTable from './components/panel/PanelTable.vue'
import DiamondButton from 'components/button/DiamondButton.vue'
import ButtonGroup from 'components/button/ButtonGroup.vue'
import TabsLink from 'components/tabs-link/TabsLink.vue'
import TabsLinkItem from 'components/tabs-link/TabsLinkItem.vue'
import RowBox from 'components/RowBox.vue'
import Cascader from 'components/cascader/Cascader.vue'
import SearchForm from 'components/form/SearchForm.vue'
import SearchFormToggle from 'components/form/SearchFormToggle.vue'
import TableCell from 'components/table-cell/TableCell.vue'
import TableCellItem from 'components/table-cell/TableCellItem.vue'
import TableTip from 'components/table-cell/TableTip.vue'
import Divider from 'components/Divider.vue'
import LabelGrid from 'components/LabelGrid.vue'
import ImageUpload from 'components/upload/ImageUpload.vue'




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
Vue.component(RowBox.name, RowBox)
Vue.component(Cascader.name, Cascader)
Vue.component(TableCell.name, TableCell)
Vue.component(TableCellItem.name, TableCellItem)
Vue.component(TableTip.name, TableTip)
Vue.component(Divider.name, Divider)
Vue.component(LabelGrid.name, LabelGrid)
Vue.component(ImageUpload.name, ImageUpload)


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
