<script setup lang="ts">
import MicroLayout from '../micro-layout/index.vue'

defineOptions({
  name: 'Layout',
})


</script>

<template>
  <n-loading-bar-provider>
    <micro-layout />
  </n-loading-bar-provider>
</template>
