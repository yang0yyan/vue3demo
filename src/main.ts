import './styles/index.scss';

import App from './App.vue';
import { createApp } from 'vue';

import { setupStore } from '@/stores';
import { router, setupRouter } from './router';

async function bootstrap() {
  const app = createApp(App);
  // 配置存储
  setupStore(app);
  // 配置路由
  setupRouter(app);

  await router.isReady();

  app.mount('#app');
}
bootstrap();
