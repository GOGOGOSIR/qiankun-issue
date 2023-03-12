<script lang="ts">
export default {
  name: 'HomePage',
  mounted() {
    console.log('window: ', window)
  },
}
</script>

<template>
  <div class="full-page-container">
    <div class="mt-20 px-15 py-10 rounded-2 border-[1px] border-solid border-[#67c23a] mb-10">
      <h2 class="text-16 text-[#67c23a] font-600">
        介绍
      </h2>
      <p class="text-12 text-[#67c23a] my-4">
        该工程为微前端项目的基座（主应用）
      </p>
    </div>
    <div class="mt-20 px-15 py-10 rounded-2 border-[1px] border-solid border-[#67c23a] mb-10">
      <h2 class="text-16 text-[#67c23a] font-600">
        技术栈：
      </h2>
      <ul>
        <li class="text-12 text-[#67c23a] my-4">
          qiankun
        </li>
        <li class="text-12 text-[#67c23a] my-4">
          vue3
        </li>
        <li class="text-12 text-[#67c23a] my-4">
          vue-router4
        </li>
        <li class="text-12 text-[#67c23a] my-4">
          pinia
        </li>
        <li class="text-12 text-[#67c23a] my-4">
          vite
        </li>
        <li class="text-12 text-[#67c23a] my-4">
          naive-ui
        </li>
        <li class="text-12 text-[#67c23a] my-4">
          tailwindcss
        </li>
      </ul>
    </div>
  </div>
</template>
