import './styles/index.scss';

import App from './App.vue';
import { createApp } from 'vue';

import { setupStore } from '@/stores';
import { router, setupRouter } from './router';

import * as Sentry from '@sentry/vue';

async function bootstrap() {
  const app = createApp(App);

  if (import.meta.env.NODE_ENV === 'production') {
    Sentry.init({
      app,
      environment: import.meta.env.MODE,
      dsn: 'http://9ce5a873cda2507daf9a9f4973b24b9a@192.168.18.123:9000/8',
      integrations: [Sentry.browserTracingIntegration({ router }), Sentry.replayIntegration()],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,

      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],

      // Capture Replay for 10% of all sessions,
      // plus for 100% of sessions with an error
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  }

  // 配置存储
  setupStore(app);
  // 配置路由
  setupRouter(app);

  await router.isReady();

  app.mount('#app');
}
bootstrap();
