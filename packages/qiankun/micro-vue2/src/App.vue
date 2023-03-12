<script>
export default {
  name: 'AppPage',
  components: {
  },
  methods: {
    handleGo(path) {
      this.$router.push(path)
    },
  },
}
</script>

<template>
  <div id="vue2-app">
    <div class="flex-center py-10">
      <el-button @click="handleGo('/qiankun-micro-vue2/guide')">
        项目简介
      </el-button>
      <el-button @click="handleGo('/qiankun-micro-vue2/about')">
        about页
      </el-button>
    </div>
    <router-view />
  </div>
</template>
