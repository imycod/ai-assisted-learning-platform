import { createRouter, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

import { globalStartupGuard, authGuard } from '@/helpers/global/session-helper'

import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach(
//   (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
//     globalStartupGuard().then(() => {
//       authGuard(to, from, next);
//     });
//   }
// );

export default router
