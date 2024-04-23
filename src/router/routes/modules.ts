import header from '@/components/HeadView.vue';
import aside from '@/components/MenuView.vue';
import type { RouteRecordRaw } from 'vue-router';

export const modules: RouteRecordRaw[] = [
  {
    path: '/root',
    name: 'root',
    components: {
      default: () => import('@/views/system/RootView.vue'),
    },
    children: [
      {
        path: '/commentOverview',
        name: 'commentOverview',
        components: {
          header,
          default: () => import('@/views/commentOverview.vue'),
        },
        meta: {
          title: '网评概览',
        },
      },
      {
        path: '/dataBase',
        name: 'dataBase',
        components: {
          header,
          default: () => import('@/views/teamStatistics.vue'),
        },
        meta: {
          title: '资料库',
        },
      },
      {
        path: '/chat',
        name: 'chat',
        components: {
          header,
          default: () => import('@/views/teamStatistics.vue'),
        },
        meta: {
          title: '智能生成语料',
        },
      },
    ],
  },
  {
    path: '/teamStructure',
    name: 'teamStructure',
    components: {
      default: () => import('@/views/system/RootView.vue'),
    },
    children: [
      {
        path: 'teamStatistics',
        name: 'teamStatistics',
        components: {
          header,
          aside,
          default: () => import('@/views/teamStatistics.vue'),
        },
        meta: {
          title: '队伍统计',
        },
      },
      {
        path: 'teamManagement',
        name: 'teamManagement',
        components: {
          header,
          aside,
          default: () => import('@/views/teamManagement.vue'),
        },
        meta: {
          title: '队员管理',
        },
      },
      {
        path: 'teamManage',
        name: 'teamManage',
        components: {
          header,
          aside,
          default: () => import('@/views/teamStatistics.vue'),
        },
        meta: {
          title: '小队管理',
        },
      },
      {
        path: 'topGroupManage',
        name: 'topGroupManage',
        components: {
          header,
          aside,
          default: () => import('@/views/teamStatistics.vue'),
        },
        meta: {
          title: '中队管理',
        },
      },
      {
        path: 'groupManage',
        name: 'groupManage',
        components: {
          header,
          aside,
          default: () => import('@/views/teamStatistics.vue'),
        },
        meta: {
          title: '分组管理',
        },
      },
    ],
  },
  {
    path: '/taskManagement',
    name: 'taskManagement',
    components: {
      default: () => import('@/views/system/RootView.vue'),
    },
    children: [
      {
        path: 'taskStatistics',
        name: 'taskStatistics',
        components: {
          header,
          aside,
          default: () => import('@/views/teamStatistics.vue'),
        },
        meta: {
          title: '任务统计',
        },
      },
      {
        path: 'assignmentList',
        name: 'assignmentList',
        components: {
          header,
          aside,
          default: () => import('@/views/teamStatistics.vue'),
        },
        meta: {
          title: '任务列表',
        },
      },
    ],
  },
];
