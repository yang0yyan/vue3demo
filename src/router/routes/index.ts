/**
 * 基本静态路由包括：
 *  普通登录页
 *  通过token直接静默登录页
 *  auth2登录页
 *  根页面
 *  重定向页
 *  页面未发现路由
 */

import type { RouteRecordRaw } from 'vue-router';

// 普通登录页
export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/LoginActivity.vue'),
  meta: {
    title: "登陆",
  },
};
// 通过token直接静默登录页
// auth2登录页
// 根页面
// 重定向页
// 页面未发现路由