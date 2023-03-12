export type MicroAppConfigList = {
  name: string
  entry: string
  container: string
}[]

export const microAppConfigList = [
  {
    name: 'qiankun-micro-vue2', // app的名称
    entry: '//localhost:9004', // 子应用的启动地址
    container: '#qiankun-micro-vue2', // 加载子应用的容器
  },
]
