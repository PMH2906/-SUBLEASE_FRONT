<template>
  <div>
    <!-- <nav>
        관심 매물 
        |
         관심 지역
    </nav> -->
    <ProfileNavBar/>
    <div class="bookmark-header">
        <router-link :to="{name:'building'}">관심 매물</router-link>
        <router-link :to="{name:'area'}">관심 지역</router-link>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import ProfileNavBar from "@/components/ProfileNavBar.vue"
export default {
    components:{
        ProfileNavBar,
    }
}
</script>

<style scoped>
.bookmark-header{
    margin-left:50px;
}
</style>