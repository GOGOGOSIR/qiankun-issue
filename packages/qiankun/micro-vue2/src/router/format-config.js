import { name } from '../../package.json'

export const format = (routes, pathPrefix, appName) => {
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]

    if (!route)
      continue

    const { children } = route
    if (pathPrefix)
      route.path = pathPrefix + route.path

    if (children && children.length)
      format(children, '', appName)
  }
}

export const prefix = `/${name}`

export const formatRoute = (routes) => {
  format(routes, prefix, name)
}
