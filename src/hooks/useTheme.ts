/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-07-26 15:36:31
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-07-26 15:36:36
 * @FilePath: \pms-pcd:\studio\ai-assist-platform-learning\front-end\src\hooks\useTheme.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ref, watchEffect } from "vue"
import { getActiveThemeName, setActiveThemeName } from "@/utils/cache/local-storage"

const DEFAULT_THEME_NAME = "normal"
type DefaultThemeName = typeof DEFAULT_THEME_NAME

/** 注册的主题名称, 其中 DefaultThemeName 是必填的 */
export type ThemeName = DefaultThemeName | "dark" | "dark-blue"

interface ThemeList {
    title: string
    name: ThemeName
}

/** 主题列表 */
const themeList: ThemeList[] = [
    {
        title: "默认",
        name: DEFAULT_THEME_NAME
    },
    {
        title: "黑暗",
        name: "dark"
    },
    {
        title: "深蓝",
        name: "dark-blue"
    }
]

/** 正在应用的主题名称 */
const activeThemeName = ref<ThemeName>(getActiveThemeName() || DEFAULT_THEME_NAME)

/** 设置主题 */
const setTheme = (value: ThemeName) => {
    activeThemeName.value = value
}

/** 在 html 根元素上挂载 class */
const setHtmlRootClassName = (value: ThemeName) => {
    document.documentElement.className = value
}

/** 初始化 */
const initTheme = () => {
    // watchEffect 来收集副作用
    watchEffect(() => {
        const value = activeThemeName.value
        setHtmlRootClassName(value)
        setActiveThemeName(value)
    })
}

/** 主题 hook */
export function useTheme() {
    return { themeList, activeThemeName, initTheme, setTheme }
}