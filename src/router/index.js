import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from "@/views/RegisterView.vue"
import UserMyPage from "@/components/UserMyPage.vue";
import AptView from "@/views/AptView";
import BookMarkView from "@/views/BookMarkView";
import MainView from "@/views/MainView";
import BookMarkBuilding from "@/components/bookmark/BookMarkBuilding";
import BookMarkArea from "@/components/bookmark/BookMarkArea";
import AptRegistView from "@/views/AptRegistView.vue";
import AptRegist from "@/components/apt/AptRegist.vue";
import LeaseRegist from "@/components/apt/LeaseRegist.vue";
import AptDetail from "@/components/apt/AptDetail.vue";

Vue.use(VueRouter)

const routes = [
  {
    path:'/apt',
    name:'',
    component: AptView
  },
  {
    path:'/',
    name:'main',
    component: MainView
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
    name:'AptRegistView',
    component: AptRegistView,
    redirect:"/registapt/apt",
    children:[
      {
        path:"apt",
        name:"apt",
        component:AptRegist
      },
      {
        path:"lease",
        name:"lease",
        component:LeaseRegist
      }
    ]
  },
  {
    path:"/bookmark",
    name:"BookMarkView",
    component: BookMarkView,
    redirect:"/bookmark/bookmarkarea",
    children:[
      {
        path:"bookmarkarea",
        name:"area",
        component: BookMarkArea
      },
      {
        path:"bookmarkbuilding",
        name:"building",
        component: BookMarkBuilding
      }
    ]
  },
  {
    path:"/interestdetail",
    name:"interestdetail",
    component: AptDetail
  }
  
]

const router = new VueRouter({
  routes
})

export default router
