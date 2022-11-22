<template>
  <div>
    <!-- <nav>
        관심 매물 
        |
         관심 지역
    </nav> -->
    <ProfileNavBar/>
    <div>
        <BookMarkContent></BookMarkContent>
    </div>
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