<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
const houseStore = "houseStore";
export default {
  data() {
    return {
      map: null,
      markerPositions: [],
      // 화면에 표시되어있는 marker들
      markers: [],
      latitude: 0,
      longitude: 0,
      image: null,
    };
  },
  computed: {
    ...mapState(houseStore, ["houses","markers","markers_tour","markers_food","markers_living"]),
  },
  created() {
    if (!("geolocation" in navigator)) {
      return;
    }

    // get position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.latitude = pos.coords.latitude;
        this.longitude = pos.coords.longitude;

        if (window.kakao && window.kakao.maps) {
          this.initMap();
        } else {
          const script = document.createElement("script");
          /* global kakao */
          script.onload = () => kakao.maps.load(this.initMap);
          script.src =
            "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0";
          document.head.appendChild(script);
        }
      },
      (err) => {
        alert(err.message);
      }
    );
  },
  watch: {
    houses: function () {
      this.setAptsOnMap(this.houses);
    },
    markers_tour: function (){
      this.setAptsOnMap(this.markers_tour);
    },
    markers_food: function(){
      this.setAptsOnMap(this.markers_food);
            console.log("123")
    },
    markers_living:function(){
      this.setAptsOnMap(this.markers_living);
    }
  },
  methods: {
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(37.4999, 127.0374),
        level: 5,
      };

      //지도 객체를 등록합니다.
      //지도 객체는 반응형 관리 대상이 아니므로 initMap에서 선언합니다.
      this.map = new kakao.maps.Map(container, options);
      this.displayMarker([[this.latitude, this.longitude]]);
    },

    changeSize(size) {
      const container = document.getElementById("map");
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      this.map.relayout();
    },
    displayMarker(markerPositions) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      const positions = markerPositions.map(
        (position) => new kakao.maps.LatLng(...position)
      );

      if (positions.length > 0) {
        this.markers = positions.map(
          (position) =>
            new kakao.maps.Marker({
              map: this.map,
              position,
            })
        );

        const bounds = positions.reduce(
          (bounds, latlng) => bounds.extend(latlng),
          new kakao.maps.LatLngBounds()
        );

        this.map.setBounds(bounds);
      }
    },
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    },

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    },
    setAptsOnMap(value) {
      if (this.markers.length > 0) {
        this.markers.forEach((marker) => marker.setMap(null));
      }

      this.markers = [];
      
      this.makeMarkers(value);

      
    },
    makeMarkers(items){
      let bounds=new kakao.maps.LatLngBounds();
      //이미지 애매하게 되는거 체크
      this.image=require("@/assets/주택.png");
      if(items==="food"){
        console.log("okok")
        this.image=require('@/assets/음식.png');
      }
      else if(items==="living"){
        this.image=require('@/assets/생활.png');
      }
      else if(items==="tour"){
        this.image=require('@/assets/여가.png');
      }
    // let imageSize = new kakao.maps.Size(40, 40); // 마커이미지의 크기입니다
    // let imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
      
    // let  markerImage = new kakao.maps.MarkerImage(this.image, imageSize, imageOption);
      items.forEach((item) => {
        let coords = new kakao.maps.LatLng(item.lat, item.lng);
        bounds.extend(coords);

        var marker = new kakao.maps.Marker({
          map: this.map,
          position: coords,
          clickable: true,
          // image: markerImage,
          title:item.apartmentName,
        });
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style='text-align : center; color:black;'>${item.apartmentName}</div>`,
          position: coords
          //removable: true,
        });

        kakao.maps.event.addListener(
          marker,
          "mouseover",
          this.makeOverListener(this.map, marker, infowindow)
        );
        kakao.maps.event.addListener(
          marker,
          "mouseout",
          this.makeOutListener(infowindow)
        );
        this.markers.push(marker);

      });
      this.map.setBounds(bounds);
    }
  },
};
</script>

<style scoped>

#map {
  margin-top: 5.5px;
  margin-left: 50px;
  width: 100%;
  height: 100vh;
}
</style>
