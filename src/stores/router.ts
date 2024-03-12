import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const routerStore = defineStore('system', {
  getters: {
    systemCode: () => [
      {
        path: "/commentOverview",
        name: "commentOverview",
        label: "网评概览",
        disable: true,
        children: []
      },
      {
        path: "",
        name: "",
        label: "队伍架构",
        disable: true,
        children: [{
          path: "/teamStatistics",
          name: "teamStatistics",
          label: "队伍统计",
          disable: true,
          children: []
        },
        {
          path: "",
          name: "",
          label: "队伍管理",
          disable: true,
          children: []
        },
        {
          path: "",
          name: "",
          label: "小队管理",
          disable: true,
          children: []
        },
        {
          path: "",
          name: "",
          label: "中队管理",
          disable: true,
          children: []
        },
        {
          path: "",
          name: "",
          label: "分组管理",
          disable: true,
          children: []
        }]
      }
    ]
  },
})
