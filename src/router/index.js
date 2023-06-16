import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import TrainingView from '../views/TrainingView.vue'
import TeamView from '../views/TeamView.vue'
import TeamsView from '../views/TeamsView.vue'


const routes = [
  {
    path: '/teams',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/training',
    name: 'TrainingView',
    component: TrainingView
  },
  {
    path: '/',
    name: 'TeamsView',
    component: TeamsView
  },
  {
    path: '/team',
    name: 'TeamView',
    component: TeamView
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
