import page from 'src/page.js'
import app from './app.vue'
import msg from './msg.vue'
import upload from './upload.vue'


const routes = [
  { path: '/', redirect: '/msg' },
  { path: '/msg', component: msg },
  { path: '/upload', component: upload },
]

page.init(app, routes)
