<template>
  <div id="app">
    <LeftSidebar></LeftSidebar>
    <HeaderNavBar></HeaderNavBar>
    <router-view/>
  </div>
</template>

<script>
import LeftSidebar from "@/components/LeftSidebar.vue";
import HeaderNavBar from "@/components/HeaderNavbar.vue";

export default {
  components:{
    LeftSidebar,
    HeaderNavBar
  }
}
</script>

<style>
*{
    padding:0;
    margin:0;
}
html{
    margin-left: 90px;
}
</style>