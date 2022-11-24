<template>
<div>
    <ProfileNavbar></ProfileNavbar>
  <div class="container">
    <h1 class="regist-title">방 등록하기</h1>
    <div class="register-type">
      <router-link :to="{ name: 'apt' }" class="apt">매매 등록</router-link>
      <router-link :to="{ name: 'lease' }" class="lease">전대 등록</router-link>
    </div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
import ProfileNavbar from "@/components/ProfileNavBar.vue";
export default {
  components:{
    ProfileNavbar,
  }
};
</script>

<style scoped>
* {
  color: black;
  z-index: -1;
}
.container {
  margin: 0 0 0 50px;
  text-align: center;
}
.regist-title {
  margin: 80px 0;
  font-weight: bold;
}
.register-type {
  display: flex;
  justify-content: center;
  align-items: center;
}
.apt {
  width: 50%;
  border: 0.5px solid #222;
  background-color: #222;
  color: white;
  height: 60px;
  line-height: 60px;
  text-decoration: none;
}
.lease {
  width: 50%;
  border: 0.5px solid #222;
  height: 60px;
  text-decoration: none;
  line-height: 60px;
}
</style>
