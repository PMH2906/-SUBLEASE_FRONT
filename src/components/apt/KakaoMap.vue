<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      map:null,
    }
  },
  methods:{
    initMap(){
      const container = document.getElementById("map");
      const options={
        center:new window.kakao.maps.LatLng(37.4999,127.0374, 16),
        level:5,
      };
      this.map=new window.kakao.maps.Map(container,options);
    }
  },
  mounted(){
    if(!window.kakao || !window.kakao.maps){
      const script = document.createElement("script");
      console.log("KEy ",process.env)
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAOMAP_KEY}&autoload=false`;
      script.addEventListener("load", ()=>{
        console.log("loaded",window.kakao);
        window.kakao.maps.load(this.initMap);
      });
      document.head.appendChild(script)
    }
  }
}
</script>

<style scoped>
#map{
    width:100%;
    height: 100vh;
}
</style>