import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/home/index.vue'
import {constantRoute} from '@/router/routes'
const router = createRouter(<any>{
  // 路由模式hash
  // history: createWebHashHistory(),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoute,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})

export default router
