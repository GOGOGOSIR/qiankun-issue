const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const BundleAnalyzerPlugin
  = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { name } = require('./package.json')

const isProd = process.env.VUE_APP_ENV_TYPE === 'production'

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? `/${name}/` : '/',
  outputDir: path.resolve(process.cwd(), `../../../dist/${name}`),
  productionSourceMap: false,
  transpileDependencies: true,
  configureWebpack: (config) => {
    // splitChunks
    config.optimization.splitChunks = {
      cacheGroups: {
        ...config.optimization.splitChunks.cacheGroups,
        elementUiVendor: {
          test: /[\\/]node_modules[\\/](element-ui)[\\/]/,
          name: 'chunk-element-ui-vendor',
          priority: -5,
          chunks: 'all',
        },
        coreJsVendor: {
          test: /[\\/]node_modules[\\/](core-js)[\\/]/,
          name: 'chunk-core-js-vendor',
          priority: -5,
          chunks: 'all',
        },
      },
    }

    // console.log('原本的plugins: ', config.optimization.splitChunks)
    const plugins = [
    ]

    if (process.env.ANALYZE) {
      plugins.push(
        new BundleAnalyzerPlugin({
          analyzerPort: 'auto',
        }),
      )
    }

    config.plugins = [...config.plugins, ...plugins]

    // 正式生产环境去掉 console，测试生产环境保留 console
    if (isProd && process.env.VUE_APP_ENV_TYPE === 'production') {
      config.optimization.minimizer[0].options.minimizer.options.compress
        = Object.assign(
          config.optimization.minimizer[0].options.minimizer.options.compress,
          {
            drop_console: true,
            drop_debugger: true,
          },
        )
    }

    // qiankun 的配置
    config.output.library = `${name}`
    config.output.libraryTarget = 'umd'
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`
  },
  devServer: {
    host: '0.0.0.0',
    port: 9004,
    headers: {
      // 确保主应用通过 fetch 方法加载脚本，避免跨域
      'Access-Control-Allow-Origin': '*',
    },
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true
    //   }
    // }
  },
})
