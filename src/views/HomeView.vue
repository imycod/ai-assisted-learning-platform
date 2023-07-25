<!--
 * @Author: wuxs 317009160@qq.com
 * @Date: 2023-07-25 13:21:01
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2023-07-25 23:40:18
 * @FilePath: \element-uid:\studio\ai-assist-learning-platform\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button class="text-blue-500">按钮</button>

    <nav class="flex justify-center space-x-4">
      <a href="/dashboard"
        class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
      <a href="/team"
        class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Team</a>
      <a href="/projects"
        class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</a>
      <a href="/reports"
        class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Reports</a>
    </nav>
  </div>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { ref } from 'vue'
const msg = ref('hello 你好')
</script>
  