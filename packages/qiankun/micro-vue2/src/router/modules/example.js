import Guide from '@/views/guide.vue'
const routes = [
  {
    path: '/guide',
    name: 'GuidePage',
    // component: () => import('@/views/guide.vue'),
    component: Guide,
    meta: {
      menuRouter: true,
      tabTitle: 'vue2-项目介绍',
    },
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('../../views/about.vue'),
    meta: {
      tabTitle: 'vue2-关于页',
    },
  },
]

export default routes
