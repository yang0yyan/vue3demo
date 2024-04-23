/**
 * 基本静态路由包括：
 *  登录路由
 *  根路由
 *  404路由
 *  重定向路由
 *  错误日志路由
 *  主框架外的路由
 */
export const LAYOUT = () => import('@/views/system/RootView.vue');
import type { RouteRecordRaw } from 'vue-router';

// 登录路由
export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/system/LoginActivity.vue'),
  meta: {
    title: '登陆',
  },
};
// 根路由
export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/login',
  meta: {
    title: 'Root',
  },
};
// 404路由
export const PAGE_NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'PageNotFound',
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
  },
  children: [
    {
      path: '/:path(.*)*',
      name: 'PageNotFound',
      component: () => import('@/views/system/NotFoundActivity.vue'),
      meta: {
        title: 'ErrorPage',
      },
    },
  ],
};
// 重定向路由
export const REDIRECT_ROUTE: RouteRecordRaw = {
  path: '/redirect',
  name: 'RedirectTo',
  component: () => import('@/views/system/RedirectActivity.vue'),
  meta: {
    title: 'Redirect',
  },
};
// 错误日志路由
export const ERROR_LOG_ROUTE: RouteRecordRaw = {
  path: '/error-log',
  name: 'ErrorLog',
  component: () => import('@/views/system/ErrorLogActivity.vue'),
  meta: {
    title: 'ErrorLog',
  },
};
// 主框架外的路由
export const mainOutRoutes: RouteRecordRaw[] = [
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/TestActivity.vue'),
    meta: {
      title: '测试',
    },
  },
];
export const basicRoutes = [
  LoginRoute,
  RootRoute,
  REDIRECT_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  ERROR_LOG_ROUTE,
  ...mainOutRoutes,
];
