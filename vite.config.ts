import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

import AutoImport from 'unplugin-auto-import/vite';
import ElementPlus from 'unplugin-element-plus/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { viteMockServe } from 'vite-plugin-mock';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: './types/auto-imports.d.ts',
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue', 'vue-router'],
      // 自定义解析器，与`unplugin-vue-components`兼容
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      // 为了获得对自动导入组件的 TypeScript 支持，Vue 3 有一个 PR扩展了全局组件的接口。目前，Volar已经支持这种用法。如果您使用 Volar，您可以更改以下配置以获得支持。num(1)
      dts: './types/components.d.ts', // 如果安装了“typescript”，则默认启用
      resolvers: [
        // 自动注册 Element Plus 组件
        ElementPlusResolver({
          importStyle: 'sass',
          // directives: true,
          // version: "2.1.5",
        }),
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
    }),
    ElementPlus({
      useSource: true,
      defaultLocale: 'zh-tw',
    }),
    Icons({
      autoInstall: true,
    }),
    viteMockServe({
      mockPath: './mock',
      enable: false,
      watchFiles: true,
      logger: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  server: {
    host: '127.0.0.1',
    port: 8080,
    proxy: {
      '/mock-server': {
        target: 'http://127.0.0.1:4523/m1/1958508-0-default/', //目标url
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/mock-server/, ''),
      },
      '/wpSystemCnpc/service-login': {
        target: 'https://218.2.192.195:28000/generalTesting/service-login',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/wpSystemCnpc\/service-login/, ''),
      },
      '/wpSystemCnpc/system-network-comment': {
        target: 'https://218.2.192.195:28000/generalTesting/system-network-comment',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/wpSystemCnpc\/system-network-comment/, ''),
      },
      '/wpSystemCnpc/fastdfs': {
        target: 'https://218.2.192.195:28000/generalTesting/service-file-system',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/wpSystemCnpc\/fastdfs/, ''),
      },
      '/wpSystemCnpc/ZdyDown': {
        target: 'http://192.168.10.71:8888/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/wpSystemCnpc\/ZdyDown/, ''),
      },
    },
  },
});
