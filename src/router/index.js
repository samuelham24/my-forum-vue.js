import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/PageHome'
import ThreadShow from '@/pages/PageThreadShow'
import ThreadCreate from '@/pages/PageThreadCreate'
import ThreadEdit from '@/pages/PageThreadEdit'
import Category from '@/pages/PageCategory'
import Forum from '@/pages/PageForum'
import Profile from '@/pages/PageProfile'
import NotFound from '@/pages/PageNotFound'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  // path to the main page
      name: 'Home',
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
      path: '/thread/create/:forumId',
      name: 'ThreadCreate',
      component: ThreadCreate,
      props: true
    },
    {
      path: '/thread/:id',  // path to the spesific thread
      name: 'ThreadShow',
      component: ThreadShow,  // name of component
      props: true
    },
    {
      path: '/thread/:id/edit',
      name: 'ThreadEdit',
      component: ThreadEdit,
      props: true
    },
    {
      path: '/me',
      name: 'Profile',
      component: Profile,
      props: true
    },
    {
      path: '/me/edit',
      name: 'ProfileEdit',
      component: Profile,
      props: {edit: true}
    },
    {
      path: '*', // path if page note found, back to home
      name: 'NotFound',
      component: NotFound
    }
  ],
  mode: 'history'
})
