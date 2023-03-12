import type { RouteRecordRaw } from 'vue-router'

export const routerConfig: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: 'home',
        name: 'HomePage',
        component: () => import('@/views/example/home.vue'),
        meta: {
          menuRouter: true,
          tabTitle: '基座-项目介绍',
        },
      },
    ],
  },
  {
    path: '/:microAppPrefix(qiankun-micro-):microAppName(vue2):appFullPath(.*)',
    component: () => import('@/views/layout/index.vue'),
  },
]
