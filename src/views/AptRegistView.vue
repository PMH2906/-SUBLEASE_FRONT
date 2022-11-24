<template>
  <div>
    <ProfileNavBar />
    <div class="container">
      <div>방 등록하기</div>
      <div class="register-type">
        <router-link :to="{ name: 'apt' }" class="apt">매매 등록</router-link>
        <router-link :to="{ name: 'lease' }" class="lease"
          >전대 등록</router-link
        >
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ProfileNavBar from "@/components/ProfileNavBar.vue";
export default {
  comments: {
    ProfileNavBar,
  },
};
</script>

<style scoped>
* {
  color: black;
  z-index: -1;
}
.container {
  margin-left: 50px;
  text-align: center;
}
.register-type {
  display: flex;
  justify-content: center;
  align-items: center;
}
.apt {
  width: 50%;
}
.lease {
  width: 50%;
}
</style>
