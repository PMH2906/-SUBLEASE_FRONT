<template>
  <div>
    <!-- <nav>
        관심 매물 
        |
         관심 지역
    </nav> -->
    <ProfileNavBar />
    <div class="bookmark-header">
      <router-link :to="{ name: 'building' }" class="apt"
        >관심 매물</router-link
      >
      |
      <router-link :to="{ name: 'area' }" class="area">관심 지역</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ProfileNavBar from "@/components/ProfileNavBar.vue";
export default {
  components: {
    ProfileNavBar,
  },
};
</script>

<style scoped>
.bookmark-header {
  margin-left: 50px;
  height: 60px;
  width: 50%;
  text-align: center;
  line-height: 60px;
}

.apt {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
}
.area {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: bold;
}

</style>
