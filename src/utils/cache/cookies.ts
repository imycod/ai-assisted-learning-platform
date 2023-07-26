/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-07-26 15:09:34
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-07-26 15:09:39
 * @FilePath: \pms-pcd:\studio\ai-assist-platform-learning\front-end\src\utils\cache\cookies.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** 统一处理 Cookie */

import CacheKey from "@/constants/cache-key"
import Cookies from "js-cookie"

export const getToken = () => {
  return Cookies.get(CacheKey.TOKEN)
}
export const setToken = (token: string) => {
  Cookies.set(CacheKey.TOKEN, token)
}
export const removeToken = () => {
  Cookies.remove(CacheKey.TOKEN)
}