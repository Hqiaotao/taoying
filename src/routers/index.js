import Vue from 'vue'
import Router from 'vue-router'
import MovieRouter from './movie'
import HomeRouter from './home'
import MineRouter from './mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    MovieRouter,
    HomeRouter,
    MineRouter,
    {
      path: '/*',
      redirect: '/home'
    },
  ]
})
