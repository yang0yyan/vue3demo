import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import ElementPlus from 'unplugin-element-plus/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: "./types/auto-imports.d.ts",
      // 自定义解析器，与`unplugin-vue-components`兼容
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 为了获得对自动导入组件的 TypeScript 支持，Vue 3 有一个 PR扩展了全局组件的接口。目前，Volar已经支持这种用法。如果您使用 Volar，您可以更改以下配置以获得支持。num(1)
      dts: "./types/components.d.ts", // 如果安装了“typescript”，则默认启用
      resolvers: [
        ElementPlusResolver({
          importStyle: "sass",
          // directives: true,
          // version: "2.1.5",
        }),
      ],
    }),
    ElementPlus({
      useSource: true,
      defaultLocale: 'zh-tw',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~/': `${path.resolve(__dirname, 'src')}/`,
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  server: {
    proxy: {
      "/mock-server": {
        target: 'http://127.0.0.1:4523/m1/1958508-0-default/', //目标url
        "changeOrigin": true,
        "secure": false,
        rewrite: (path) => path.replace(/^\/mock-server/, ""),
      },
    }
  }
})
