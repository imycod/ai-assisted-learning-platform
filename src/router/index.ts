/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-07-25 13:21:01
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-07-26 15:58:50
 * @FilePath: \pms-pcd:\studio\ai-assist-platform-learning\front-end\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, createWebHistory, NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from 'vue-router'

import { globalStartupGuard, authGuard } from '@/helpers/global/session-helper'

const Layouts = () => import("@/layouts/index.vue")

import HomeView from '../views/HomeView.vue'


/** 常驻路由 */
export const constantRoutes: RouteRecordRaw[] = [
  // {
  //   path: "/redirect",
  //   component: Layouts,
  //   meta: {
  //     hidden: true
  //   },
  //   children: [
  //     {
  //       path: "/redirect/:path(.*)",
  //       component: () => import("@/views/redirect/index.vue")
  //     }
  //   ]
  // },
  // {
  //   path: "/403",
  //   component: () => import("@/views/error-page/403.vue"),
  //   meta: {
  //     hidden: true
  //   }
  // },
  // {
  //   path: "/404",
  //   component: () => import("@/views/error-page/404.vue"),
  //   meta: {
  //     hidden: true
  //   },
  //   alias: "/:pathMatch(.*)*"
  // },
  // {
  //   path: "/login",
  //   component: () => import("@/views/login/index.vue"),
  //   meta: {
  //     hidden: true
  //   }
  // },
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
  },
  // {
  //   path: "/",
  //   component: Layouts,
  //   redirect: "/dashboard",
  //   children: [
  //     {
  //       path: "dashboard",
  //       component: () => import("@/views/dashboard/index.vue"),
  //       name: "Dashboard",
  //       meta: {
  //         title: "首页",
  //         svgIcon: "dashboard",
  //         affix: true
  //       }
  //     }
  //   ]
  // },
]


/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const asyncRoutes: RouteRecordRaw[] = [
  // {
  //   path: "/permission",
  //   component: Layouts,
  //   redirect: "/permission/page",
  //   name: "Permission",
  //   meta: {
  //     title: "权限管理",
  //     svgIcon: "lock",
  //     roles: ["admin", "editor"], // 可以在根路由中设置角色
  //     alwaysShow: true // 将始终显示根菜单
  //   },
  //   children: [
  //     {
  //       path: "page",
  //       component: () => import("@/views/permission/page.vue"),
  //       name: "PagePermission",
  //       meta: {
  //         title: "页面权限",
  //         roles: ["admin"] // 或者在子导航中设置角色
  //       }
  //     },
  //     {
  //       path: "directive",
  //       component: () => import("@/views/permission/directive.vue"),
  //       name: "DirectivePermission",
  //       meta: {
  //         title: "指令权限" // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
  //   redirect: "/404",
  //   name: "ErrorPage",
  //   meta: {
  //     hidden: true
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes: constantRoutes
})

// router.beforeEach(
//   (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
//     globalStartupGuard().then(() => {
//       authGuard(to, from, next);
//     });
//   }
// );


/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route:any) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}


export default router
