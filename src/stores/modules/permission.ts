/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-07-26 15:12:49
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-07-26 15:43:15
 * @FilePath: \pms-pcd:\studio\ai-assist-platform-learning\front-end\src\stores\modules\permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref } from "vue"
import store from "@/stores"
import { defineStore } from "pinia"
import { type RouteRecordRaw } from "vue-router"
import { constantRoutes, asyncRoutes } from "@/router"
import asyncRouteSettings from "@/configs/async-route"

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  const routeRoles = route.meta?.roles
  return routeRoles ? roles.some((role) => {
    return (routeRoles as string[] | number[] | any[]).includes(role)
  }) : true
}

const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const tempRoute = { ...route }
    if (hasPermission(roles, tempRoute)) {
      if (tempRoute.children) {
        tempRoute.children = filterAsyncRoutes(tempRoute.children, roles)
      }
      res.push(tempRoute)
    }
  })
  return res
}

export const usePermissionStore = defineStore("permission", () => {
  const routes = ref<RouteRecordRaw[]>([])
  const dynamicRoutes = ref<RouteRecordRaw[]>([])

  const setRoutes = (roles: string[]) => {
    const accessedRoutes = asyncRouteSettings.open ? filterAsyncRoutes(asyncRoutes, roles) : asyncRoutes
    routes.value = constantRoutes.concat(accessedRoutes)
    dynamicRoutes.value = accessedRoutes
  }

  return { routes, dynamicRoutes, setRoutes }
})

/** 在 setup 外使用 */
export function usePermissionStoreHook() {
  return usePermissionStore(store)
}