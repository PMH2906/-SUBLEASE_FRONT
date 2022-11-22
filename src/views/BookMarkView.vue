<template>
  <div>
    <div>
        <router-link :to="{name:'building'}">관심 매물</router-link>
        <router-link :to="{name:'area'}">관심 지역</router-link>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>