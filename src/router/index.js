import Vue from 'vue'
import VueRouter from 'vue-router'

//进行懒加载
const Home = () => import('views/home/home.vue')
const Activity = () => import('views/activity/activity.vue')
const Assignment = () => import('views/assignment/assignment.vue')
const Mine = () => import('views/mine/mine.vue')

//1、安装插件
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页'
    }
  },
  {
    path:'/activity',
    component:Activity,
    meta:{
      title:'活动'
    }
  },
  {
    path:'/assignment',
    component:Assignment,
    meta:{
      title:'任务'
    }
  },
  {
    path:'/mine',
    component:Mine,
    meta:{
      title:'我的'
    }
  }
]
//2、创建router
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
