import page from 'src/page.js'
import app from './app.vue'
import ticket from './ticket.vue'
import traffic from './traffic.vue'
import food from './food.vue'
import group from './group.vue'

const routes = [
  { path: '/ticket', component: ticket },
  { path: '/traffic', component: traffic },
  { path: '/food', component: food },
  { path: '/group', component: group },
]

page.init(app, routes)
