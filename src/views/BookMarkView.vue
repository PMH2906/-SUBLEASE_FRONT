<template>
  <div>
    <!-- <nav>
        관심 매물 
        |
         관심 지역
    </nav> -->
    <ProfileNavBar/>
    <div>
        <router-link :to="{name:'building'}">관심 매물</router-link>
        <router-link :to="{name:'area'}">관심 지역</router-link>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
import ProfileNavBar from "@/components/ProfileNavBar.vue"
import BookMarkContent from "@/components/bookmark/BookMarkContent.vue";
export default {
    components:{
        BookMarkContent,
        ProfileNavBar,
    }
}
</script>

<style scoped>

</style>