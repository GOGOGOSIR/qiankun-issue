import './public-path'
import './styles/index.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import './element-ui/index'
import App from './App.vue'
import { routes } from './router/route-config'
import { initRouteGuard } from './router/router-guard'

Vue.config.productionTip = false
Vue.use(VueRouter)
// issues fix: https://github.com/vuejs/vue-router/issues/2881
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

let instance = null
let router = null

function render(props) {
  const { container } = props || {}

  const history = 'history'

  router = new VueRouter({
    base: '/',
    mode: history,
    routes,
  })

  if (window.__POWERED_BY_QIANKUN__ && props) {
    const { mainRouter, mainWindow, loadMicroApp } = props
    // 初始化微应用的全局配置
    mainRouter && (window.mainRouter = mainRouter)
    loadMicroApp && (window.loadMicroApp = loadMicroApp)
    mainWindow && (window.__MAIN_WINDOW__ = mainWindow)
  }

  initRouteGuard(router)

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(
    container ? container.querySelector('#micro-vue2-app') : '#micro-vue2-app',
  )
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__)
  render()

export async function bootstrap() {
  console.log('Micro-vue2 bootstraped')
}

export async function mount(props) {
  console.log('Micro-Vue2 mount', props)
  render(props)
  console.log('vue2 应用的window: ', window)
}

export async function unmount() {
  console.log('Micro-Vue2 unmount')
  if (instance) {
    instance.$destroy()
    instance.$el.innerHTML = ''
    instance = null
  }
  router = null
  window.__MAIN_WINDOW__ = null
  window.mainRouter = null
  window.loadMicroApp = null
}

export async function update(props) {
  console.log('Micro-Vue2 update', props)
}
