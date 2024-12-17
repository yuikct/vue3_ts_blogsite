import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import Markdown from 'vite-plugin-md'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // 使得 .md 文件也作为 Vue 组件处理
    }),
    vueJsx(),
    VueSetupExtend(),
    Markdown({
      // frontmatter: true, // Disable frontmatter extraction
    }) // 添加 Markdown 插件
    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // quietDeps: true, // 可以尝试，但在高版本中似乎不起作用
        silenceDeprecations: ['legacy-js-api'],
      }
    }
  }
})
