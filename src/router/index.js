import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/ms',
    name: 'Ms',
    component: () => import('../views/ms.vue')
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/article'),
    children: [
      {
        path: 'publish',
        name: 'ArticlePublish',
        component: () => import('../views/article/articlePublish')
      },
      {
        path: 'look/:id',
        name: 'ArticleLook',
        component: () => import('../views/article/article')
      },
      {
        path: 'list',
        name: 'ArticleList',
        component: () => import('../views/article/articleList')
      }
    ]
  }, {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
