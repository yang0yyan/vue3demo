/// <reference types="vite/client" />

interface ImportMetaEnv {
  // readonly VITE_APP_TITLE: string
  // 更多环境变量...
  readonly NODE_ENV: string;
  readonly VITE_NETWORK_TIMEOUT: number;
  readonly VITE_USE_MOCK: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
