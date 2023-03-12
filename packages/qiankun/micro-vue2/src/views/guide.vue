<script>
export default {
  name: 'GuidePage',
  components: {
  },
}
</script>

<template>
  <div class="full-page-container">
    <div class="px-15 py-10 rounded-2 border-[1px] border-solid border-[#67c23a] mb-10">
      <h2 class="text-16 text-[#67c23a] font-600">
        技术栈：
      </h2>
      <ul>
        <li class="text-12 text-[#67c23a] my-4">
          vue2
        </li>
        <li class="text-12 text-[#67c23a] my-4">
          vue-router3
        </li>
        <li class="text-12 text-[#67c23a] my-4">
          element-ui
        </li>
        <li class="text-12 text-[#67c23a] my-4">
          tailwindcss
        </li>
      </ul>
    </div>
    <div class="flex">
      <div class="flex-1 px-15 py-10 rounded-2 border-[1px] border-solid border-[#67c23a] mb-10 mr-10">
        <h2 class="text-16 text-[#67c23a] font-600 mb-10">
          基础组件：
        </h2>
        <div>
          <el-button>Default</el-button>
          <el-button type="primary">
            Primary
          </el-button>
          <el-button type="success">
            Success
          </el-button>
          <el-button type="info">
            Info
          </el-button>
          <el-button type="warning">
            Warning
          </el-button>
          <el-button type="danger">
            Danger
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
