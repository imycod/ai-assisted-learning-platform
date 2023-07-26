/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-07-26 15:34:19
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-07-26 15:34:36
 * @FilePath: \pms-pcd:\studio\ai-assist-platform-learning\front-end\src\configs\layouts.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { getConfigLayout } from "@/utils/cache/local-storage"

/** 项目配置 */
export interface LayoutSettings {
  /** 是否显示 Settings Panel */
  showSettings: boolean
  /** 布局模式 */
  layoutMode: "left" | "top" | "left-top"
  /** 是否显示标签栏 */
  showTagsView: boolean
  /** 是否显示 Logo */
  showLogo: boolean
  /** 是否固定 Header */
  fixedHeader: boolean
  /** 是否显示消息通知 */
  showNotify: boolean
  /** 是否显示切换主题按钮 */
  showThemeSwitch: boolean
  /** 是否显示全屏按钮 */
  showScreenfull: boolean
  /** 是否缓存标签栏 */
  cacheTagsView: boolean
  /** 是否显示灰色模式 */
  showGreyMode: boolean
  /** 是否显示色弱模式 */
  showColorWeakness: boolean
}

export const layoutSettings: LayoutSettings = getConfigLayout() ?? {
  layoutMode: "left",
  showSettings: true,
  showTagsView: true,
  fixedHeader: true,
  showLogo: true,
  showNotify: true,
  showThemeSwitch: true,
  showScreenfull: true,
  cacheTagsView: false,
  showGreyMode: false,
  showColorWeakness: false
}