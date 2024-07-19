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
        path: '/productCalculation',
        name: 'productCalculation',
        components: {
          header,
          default: () => import('@/views/ui/ProductCalculation.vue'),
        },
        meta: {
          title: '商品统计',
        },
      },
      {
        path: '/productionRatio',
        name: 'productionRatio',
        components: {
          header,
          default: () => import('@/views/ui/ProductionRatio.vue'),
        },
        meta: {
          title: '投产比计算',
        },
      },
      {
        path: '/pictureEdit',
        name: 'pictureEdit',
        components: {
          header,
          default: () => import('@/views/ui/PictureEdit.vue'),
        },
        meta: {
          title: '图片编辑器',
        },
      },
      {
        path: '/assetLibrary',
        name: 'assetLibrary',
        components: {
          header,
          default: () => import('@/views/ui/AssetLibrary.vue'),
        },
        meta: {
          title: '资产库',
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
