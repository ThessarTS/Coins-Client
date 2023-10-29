import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import MyCoinsView from '../views/MyCoinsView.vue'
import MarketView from '../views/MarketView.vue'
import RegisterView from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/mycoins',
      name: 'mycoins',
      component: MyCoinsView
    },
    {
      path: '/markets',
      name: 'markets',
      component: MarketView
    },

  ]
})

router.beforeEach((to, from, next) => {
  if (localStorage.access_token) {
    if (to.name == 'login' || to.name == 'register') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.name == 'mycoins') {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
