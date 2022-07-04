import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/views/Index";
// import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: 'index'
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
