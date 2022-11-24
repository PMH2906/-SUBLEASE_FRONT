<template>
  <div id="app">
    <LeftSidebar v-if="$route.name !== 'main'"></LeftSidebar>
    <router-view/>
  </div>
</template>

<script>
import LeftSidebar from "@/components/LeftSidebar.vue";

export default {
  components:{
    LeftSidebar,
  }
}
</script>

<style>
*{
    padding:0;
    margin:0;
}
body{
 -ms-overflow-style: none;
 }
 
::-webkit-scrollbar {
  display: none;
}

/*특정 부분 스크롤바 없애기*/

.box{
   -ms-overflow-style: none;
}
.box::-webkit-scrollbar{
  display:none;
}
</style>