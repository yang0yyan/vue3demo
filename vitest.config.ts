import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      deps: {
        inline: ['element-plus', 'vue-router']
      },
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      // 配置报告器
      reporters: ["default"],
      // 配置覆盖率
      coverage: {
        provider: "v8",
        reporter: ['text', 'html', 'clover', 'json']
      },
    }
  })
)