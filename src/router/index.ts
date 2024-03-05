import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginActivity.vue')
    },
    {
      path: '/root',
      name: 'root',
      component: () => import('../views/RootView.vue'),
      children: [
        {
          path: "/commentOverview",
          name: "commentOverview",
          component: () => import('../views/commentOverview.vue')
        }
      ]
    }
  ]
})

export default router
