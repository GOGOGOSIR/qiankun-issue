import { prefix } from './format-config'

export const initRouteGuard = (router) => {
  router.beforeEach((to, from, next) => {
    console.log(to.path)
    if (to.path === from.path) {
      // 子应用内部跳转的时候，由于 single-spa 的原因会重复触发一次
      return
    }

    if (!to.path.startsWith(prefix)) {
      // 跳转至非该子应用的路由时无需处理
      return
    }

    console.log('<<<子应用 micro-vue2 的路由守卫 beforeEach >>>', to, from)

    next()
  })
}
