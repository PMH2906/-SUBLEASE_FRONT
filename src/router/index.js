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
import store from "@/store";
Vue.use(VueRouter)

const onlyAuthUser = async (to, from, next) => {
  const checkUserInfo = store.getters["userStore/checkUserInfo"]; // true or false
  const checkToken = store.getters["userStore/checkToken"]; // true or false
  let token = sessionStorage.getItem("access-token");
  console.log("로그인 처리 전", checkUserInfo, token);

  if (checkUserInfo != null && token) {
    console.log("토큰 유효성 체크하러 가자!!!!");
    await store.dispatch("userStore/getUserInfo", token);
  }
  if (!checkToken || checkUserInfo === null) {
    alert("로그인이 필요한 페이지입니다..");
    // next({ name: "login" });
    router.push({ name: "LoginView" });
  } else {
    console.log("로그인 했다!!!!!!!!!!!!!.");
    next();
  }
};

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
    beforeEnter: onlyAuthUser, // 로그인 검사하고 나서 이 페이지 이동할 수 있도록
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
    beforeEnter: onlyAuthUser, // 로그인 검사하고 나서 이 페이지 이동할 수 있도록
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
