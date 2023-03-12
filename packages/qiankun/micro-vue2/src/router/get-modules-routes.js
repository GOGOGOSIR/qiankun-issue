import { formatRoute } from './format-config'

// eslint-disable-next-line import/no-mutable-exports
let modulesRoutes = []

function compileModulesFile(modulesFiles) {
  modulesFiles.keys().forEach((modulePath) => {
    const moduleExport = modulesFiles(modulePath).default
    formatRoute(moduleExport)
    modulesRoutes = [...modulesRoutes, ...moduleExport]
    console.log('vue2 routes: ', modulesRoutes)
  })
}

const modulesFiles = require.context('./modules', true, /\.js$/)
compileModulesFile(modulesFiles)

export default modulesRoutes
