<template>
  <div>
    <nav>
        관심 매물 
        |
         관심 지역
    </nav>
    <div>
        <BookMarkContent></BookMarkContent>
    </div>
</div>
</template>

<script>
import BookMarkContent from "@/components/bookmark/BookMarkContent.vue";
export default {
    components:{
        BookMarkContent,
    }
}
</script>

<style scoped>

</style>