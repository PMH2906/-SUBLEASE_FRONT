<template>
  <div class="nav-container">
    <b-navbar-nav class="icon-bar">
      <router-link class="bar-item" to="/"><b-icon icon="building" font-scale="1.5"/><div id="title">main</div></router-link>
      <router-link class="bar-item" to="/apt"><b-icon icon="geo-alt" font-scale="1.5"/><span id="title">search</span></router-link>
      <router-link class="bar-item" to="/registapt"><b-icon icon="upload" font-scale="1.5"/><span id="title">upload</span></router-link>
      <!-- <router-link class="bar-item" to="/bookmark"><b-icon icon="bookmark-heart" font-scale="2"/></router-link> -->
      <router-link class="bar-item" to="/bookmark"><b-icon icon="bookmark-star" font-scale="1.5"/><span id="title">scrap</span></router-link>
      <router-link class="bar-item" to="/mypage"><b-icon icon="person" font-scale="1.5" v-if="userInfo"/><span id="title" v-if="userInfo">mypage</span></router-link>
      <!-- <router-link class="bar-item" to="/login" v-if="!userInfo">로그인</router-link>
      <div class="bar-item" @click="logout" v-else>로그아웃</div> -->
    </b-navbar-nav>
    </div>
</template>

<script>
import {mapState} from "vuex";
const userStore="userStore";
export default {
  computed:{
    ...mapState(userStore, ["userInfo"])
  }
};
</script>
<style scoped>
*{
  z-index: 3;
}

.icon-bar {
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  width: 50px;
  background-color: #2f2d38;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  box-shadow: 4px 0px 5px grey;
  /* padding-top:10px; */
}
#title{
  font-size: 5px;
}

.icon-bar .bar-item {
  display: block;
  width:50px;
  text-align: center;
  padding: 3px;
  transition: all 0.3s ease;
  /* color: #25284c; */
  color: white;
  font-size: 14px;
  margin: 15px 0;
  text-decoration: none;
  cursor:pointer;
}
a {
  text-decoration: none;
  /* border-bottom: dotted 1px; */
}
a:hover {
  /* background-color: #858585; */
  transform: scale(1.2);
}


</style>
