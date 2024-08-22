import { createRouter, createWebHistory } from 'vue-router'
import page1View from '../views/page1View.vue'
import subView from '../views/subView.vue'

const router = createRouter({
  history: createWebHistory('/homework3and4/'),
  routes: [
    {
      path: '/',
      name: 'page1View',
      component: page1View,
    },
    {
      path: '/subView',
      name: 'subView',
      component: subView,
    },
  ],
})

export default router
