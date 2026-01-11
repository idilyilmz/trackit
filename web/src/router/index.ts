import { createRouter, createWebHistory } from 'vue-router'
import { HomePage, ProfilePage } from '../pages'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/profile', name: 'Profile', component: ProfilePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
