<template>
  <router-link class="e
  
  
  vent-link" to="">
    <div class="event-card">
      
      <img
        class="img"
        :src="`http://localhost:9999/upload/${event.fileInfos[0].saveFolder}/${event.fileInfos[0].saveFile}`"
        alt=""
      />

      <b-card-body class="title">
        <b-card-title class="livingtype" v-if="event.livingType"
          >월세 {{ event.deposit }}/{{ event.rentFee }} 만원</b-card-title
        >
        <b-card-title class="livingtype" v-else
          >전세 {{ event.deposit }} 만원</b-card-title
        >
        <!-- <b-card-title class="apt-name">{{ event.buildingName }}</b-card-title> -->
        <!-- <b-card-sub-title class="sub-title"
          >{{ event.sido }} {{ event.sigungu }} {{event.bname}}</b-card-sub-title> -->
        <b-card-sub-title class="sub-title">{{
          event.buildingName
        }}</b-card-sub-title>
        <b-card-sub-title class="sub-title tradeType" v-if="event.tradeType"
          >전대 매물</b-card-sub-title
        >
        <b-card-sub-title class="sub-title tradeType" v-else
          >일반 매물</b-card-sub-title
        >
      </b-card-body>
      <!-- {{ event }} -->
    </div>
  </router-link>
</template>

<script>
import { mapState } from "vuex";
const houseStore = "houseStore";
export default {
  name: "AptTradeCard",
  components: {},
  computed: {
    ...mapState(houseStore, ["tradehouse"]),
  },
  created() {},
  methods: {},
  props: {
    event: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
*{
  text-decoration: none;
}
.img {
  width: 100%;
  height: 200px;
  margin: 15px;
}
.livingtype {
  color: black;
  font-size: 23px;
  margin: 5px;
  font-weight: bold;
}
.tradeType {
  border: 1px solid #2f2d38;
  padding: 0;
  border-radius: 7px;
}
.title {
  text-align: center;
  justify-content: center;
  align-items: center;
}
.sub-title {
  font-size: 15px;
  margin: 5px;
}

.event-card {
  width: 320px;
  height: auto;
  min-height: 450px;
  background: transparent;
  border-radius: 20px;
  overflow: hidden;
  padding: 10px 15px;
  margin-bottom: 24px;
  margin-right: 10px;
  transition: all 0.2s linear;
  cursor: pointer;
  color: #2f2d38;

}

.status {
  display: flex;
  justify-content: center;
}
.status-icon-r,
.status-icon-g {
  margin: auto 0;
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  background: rgb(214, 61, 46);
  border-radius: 50%;
}
.status-icon-g {
  background: rgb(92 199 12);
}
img {
  margin-top: 5%;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.event-card > .title {
  margin: 0;
}
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
.a{
  color: none;
  text-decoration: none;
}
.a:hover{
  text-decoration: none;
}
</style>