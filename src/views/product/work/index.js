import page from 'src/page.js'
import app from './app.vue'
import a from './a.vue'
import b from './b.vue'


const routes = [
  { path: '/', redirect: '/a' },
  { path: '/a', component: a },
  { path: '/b', component: b },
]

page.init(app, routes)
