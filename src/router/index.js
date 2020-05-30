import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import ThreadShow from '@/pages/PageThreadShow'
import Category from '@/pages/PageCategory'
import Forum from '@/pages/PageForum'
import NotFound from '@/pages/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  // path to the main page
      name: 'Hello',
      component: Home  // name of component
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: Category,
      props: true
    },
    {
      path: '/forum/:id',  // path to the main page
      name: 'Forum',
      component: Forum,  // name of component
      props: true
    },
    {
      path: '/thread/:id',  // path to the spesific thread
      name: 'ThreadShow',
      component: ThreadShow,  // name of component
      props: true
    },
    {
      path: '*', // path if page note found, back to home
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
