/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-07-25 13:21:01
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-07-26 15:51:10
 * @FilePath: \element-uid:\studio\ai-assist-learning-platform\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/css/index.scss'

createApp(App).use(createPinia()).use(router).mount('#app')
