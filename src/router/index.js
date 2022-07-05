import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/views/Index";
import Register from "@/views/Register";
import Experience from "@/views/Experience";
import RegistrationCompleted from "@/views/RegistrationCompleted";
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
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
  },
  {
    path: '/completed',
    name: 'completed',
    component: RegistrationCompleted
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
