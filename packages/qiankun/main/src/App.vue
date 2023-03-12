<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<script lang="ts">
export default {
  name: 'App',
}
</script>

<template>
  <n-message-provider>
    <n-button type="success" class="mr-10" @click="navigateTo('/home')">
      主应用的首页
    </n-button>
    <n-button type="success" @click="navigateTo('/qiankun-micro-vue2/guide')">
      vue2子应用首页
    </n-button>
    <router-view />
  </n-message-provider>
</template>
