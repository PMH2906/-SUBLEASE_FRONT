<template>
  <div>
    <b-navbar-nav class="icon-bar">
      <router-link class="bar-item" to="/"><b-icon icon="house" font-scale="1.5"/>Logo</router-link>
      <router-link class="bar-item" to="/apt"><b-icon icon="geo-alt" font-scale="1.5"/></router-link>
      <router-link class="bar-item" to="/registapt"><b-icon icon="upload" font-scale="1.5"/></router-link>
      <!-- <router-link class="bar-item" to="/bookmark"><b-icon icon="bookmark-heart" font-scale="2"/></router-link> -->
      <router-link class="bar-item" to="/bookmark"><b-icon icon="bookmark-star" font-scale="1.5"/></router-link>
      <router-link class="bar-item" to="/mypage"><b-icon icon="person" font-scale="1.5"/></router-link>
      <!-- <router-link class="bar-item" to="/login" v-if="!userInfo">로그인</router-link>
      <div class="bar-item" @click="logout" v-else>로그아웃</div> -->
    </b-navbar-nav>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
const userStore = "userStore";
export default {
  computed: {
    ...mapState(userStore, ["userInfo"]),
    // ...mapGetters(["checkUserInfo"]),
  },
  methods: {
    ...mapActions(userStore, ["userLogout"]),
    logout() {
      console.log(this.userInfo);
      this.userLogout(this.userInfo.userId);
      sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
      sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>


.icon-bar {
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  width: 50px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
  box-shadow: 4px 0px 5px grey;
}

.icon-bar .bar-item {
  display: block;
  text-align: center;
  padding: 10px;
  transition: all 0.3s ease;
  color: #25284c;
  font-size: 14px;
  margin-bottom: 20px;
  text-decoration: none;
  cursor:pointer;
}
a {
  text-decoration: none;
}
.icon-bar a:hover {
  /* background-color: #858585; */
}


</style>
