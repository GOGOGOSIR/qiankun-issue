<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { microAppConfigList } from './app-config'
import { useLoadApp } from './load-app'

defineOptions({
  name: 'MicroLayout',
})

const isMicroApp = ref(false)
const loadedApp = ref<Map<string, any>>(new Map())

const { loadApp } = useLoadApp()
const route = useRoute()

const activeApp = ref('')

watch(() => route.params, async (n: any, o: any) => {
  const toAppPrefix = n?.microAppPrefix as string | undefined
  const toAppName = n?.microAppName as string | undefined
  const fromAppName = o?.microAppName as string | undefined
  if (toAppPrefix && toAppName) {
    isMicroApp.value = true
    if (toAppName !== fromAppName) {
      // 子应用跳转
      console.log('主应用layout监听子应用router变化')
      console.log('即将打开的子应用标识', toAppName)
      console.log('离开的子应用标识：', fromAppName)
      console.log(`应用名：${toAppPrefix + toAppName}`)
      activeApp.value = toAppPrefix + toAppName
      const targetAppConfig = microAppConfigList.find(cfg => cfg.name === activeApp.value) // 当前激活的应用的相关配置

      if (targetAppConfig) {
        if (!loadedApp.value.has(activeApp.value)) {
          const app = await loadApp(targetAppConfig)
          loadedApp.value.set(activeApp.value, app)
        }
      }
    }
  }
  else {
    isMicroApp.value = false
  }
}, {
  immediate: true,
})
</script>

<template>
  <!-- 主应用的内部的路由 -->
  <router-view />
  <!-- 子应用的容器 -->
  <div v-for="item of microAppConfigList" v-show="isMicroApp && activeApp === item.name" :id="item.name" :key="item.name" />
</template>
