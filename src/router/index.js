import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from "@/views/RegisterView.vue"
import UserMyPage from "@/components/UserMyPage.vue";
import AptView from "@/views/AptView";
import RegistAptView from "@/views/apt/RegistAptView";
import BookMarkView from "@/views/BookMarkView";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'',
    component: AptView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path:"/register",
    name:"RegisterView",
    component: RegisterView
  },
  {
    path:"/mypage",
    name:"MyPageView",
    component:UserMyPage
  },
  {
    path:'/registapt',
    name:'RegistAptView',
    component: RegistAptView
  },
  {
    path:"/bookmark",
    name:"BookMarkView",
    component: BookMarkView
  }
]

const router = new VueRouter({
  routes
})

export default router
