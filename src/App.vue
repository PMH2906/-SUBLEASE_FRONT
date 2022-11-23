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
</style>