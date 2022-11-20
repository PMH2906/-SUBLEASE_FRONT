<template>
  <div>
    <b-navbar-nav class="icon-bar">
      <router-link class="bar-item" to="/">Home</router-link>
      <router-link class="bar-item" to="/registapt">매물<br />올리기</router-link>
      <router-link class="bar-item" to="/bookmark">북마크</router-link>
      <router-link class="bar-item" to="/login" v-if="!userInfo">로그인</router-link>
      <div class="bar-item" @click="logout" v-else>로그아웃</div>
      <router-link to="/mypage" class="bar-item">내정보보기</router-link>
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
  width: 90px;
  background-color: #555;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
}

.icon-bar .bar-item {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 14px;
  margin-bottom: 20px;
  text-decoration: none;
  cursor:pointer;
}

.icon-bar a:hover {
  background-color: #858585;
}

.active {
  background-color: #5eaf13;
}
</style>
