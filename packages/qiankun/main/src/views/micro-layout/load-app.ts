
import { loadMicroApp } from 'qiankun'
import { useRouter } from 'vue-router'

export const useLoadApp = () => {
  const router = useRouter()

  const loadApp = async (config: any) => {
    const { name } = config

    const cfg: any = {
      ...config,
      props: {
        mainWindow: window,
        mainRouter: router,
        loadMicroApp,
      },
    }

    console.log(`手动加载子应用${name}`)

    const app = loadMicroApp(cfg, {
      sandbox: {
        experimentalStyleIsolation: false, // 子应用样式隔离, 不能开启，因为当子应用插入到body的组件的样式会丢失
      },
    })

    await app.mountPromise

    return app
  }

  return {
    loadApp,
  }
}
