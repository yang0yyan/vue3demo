/// <reference types="vite/client" />

interface ImportMetaEnv {
    // readonly VITE_APP_TITLE: string
    // 更多环境变量...
    readonly NODE_ENV: string; // 运行环境
    readonly VITE_NETWORK_TIMEOUT: number; // 设置请求超时时间
    readonly VITE_USE_MOCK: boolean; // 是否使用mock
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}