import {createRouter, createWebHashHistory} from 'vue-router'
import Index from "@/views/Index";
import Register from "@/views/Register";
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
    path: '/completed',
    name: 'completed',
    component: RegistrationCompleted
  }
]

const router = createRouter({
  history:  createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
