import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import pluginRewriteAll from 'vite-plugin-rewrite-all'
import type { PluginOption } from 'vite'
import createEsbuildPlugin from './plugins/esbuild'
import createHtmlPlugin from './plugins/html'
import createLegacyPlugin from './plugins/legacy'

import createVisualizerPlugin from './plugins/visualizer'

export default (env: Record<string, any>) => {
  const plugins: PluginOption[] = [
    DefineOptions(),
    vue(),
    vueJsx(),
    pluginRewriteAll(),
    createLegacyPlugin(),
    createHtmlPlugin(env),
    AutoImport({
      imports: [
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ]

  const visualizerPlugin = createVisualizerPlugin()
  const esbuildPlugin = createEsbuildPlugin(env)

  visualizerPlugin && plugins.push(visualizerPlugin)
  esbuildPlugin && plugins.push(esbuildPlugin)

  return plugins
}
