<template>
 
    <div class="event-card">
      <img
        class="img"
        :src="`http://localhost:9999/upload/${event.fileInfos[0].saveFolder}/${event.fileInfos[0].saveFile}`"
        alt=""
      />

      <b-card-body class="title" @click="goToDetail(event.tradeNo)">
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
        <font-awesome-icon class="heart" icon="fa-regular fa-heart" v-if="!status" @click="[registInterestApt(event.tradeNo, userInfo.userId),toggle()]"/>
        <!-- <font-awesome-icon class="heart" icon="fa-regular fa-heart" v-for="(item, index) in interest_building.list.filter((c)=>c.tradeNo!=event.tradeNo)"  :key="index" @click="[registInterestApt(event.tradeNo, userInfo.userId),toggle()]"/>
        <font-awesome-icon class="heart" icon="fa-solid fa-heart" v-for="(item, index) in interest_building.list.filter((c)=>c.tradeNo===event.tradeNo)" :key="index"  @click="[deleteInterestTrade(event.tradeNo),toggle()]"/> -->
        <!-- <font-awesome-icon class="heart" icon="fa-solid fa-heart" v-for="(item, index) in interest_building.filter((c)=>c.tradeNo!==tradeNo)" :key="index"  @click="[deleteInterestTrade(event.tradeNo),toggle()]"/> -->
        <font-awesome-icon class="heart" icon="fa-solid fa-heart" v-if="status" @click="[deleteInterestTrade(event.tradeNo),toggle()]"/>
      <!-- {{interest_building.list}} -->
      <!-- {{ event }} -->
    </div>

</template>

<script>
import { mapState,mapActions } from "vuex";
const houseStore = "houseStore";
const userStore = "userStore";
export default {
  name: "AptTradeCard",
  components: {},
  computed: {
    ...mapState(houseStore, ["tradehouse","interest_building","interest_building"]),
    ...mapState(userStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(houseStore, ["setInterestApt","deleteHouseTrade","getHouseTrade","getInterestBuilding",]),
    //관심지역 등록
    registInterestApt(tradeNo, userId) {
      console.log(tradeNo, userId);
      console.log("REGISTAPT", tradeNo, userId);
      const params = { tradeNo, userId };
      this.setInterestApt(params);
    },
    deleteInterestTrade(tradeNo){
      console.log(tradeNo)
      this.deleteHouseTrade(tradeNo);
    },
    toggle(){
      this.status=!this.status;
    },
    checkStatus(tradeNo){
      this.interest_building.list.forEach(e => {
        console.log(e.tradeNo, tradeNo)
        if(e.tradeNo==tradeNo){
          this.status=true;
        }
        else this.status=false;
      });
    },
    goToDetail(tradeNo){
      console.log("111111111",tradeNo)
      const params = {tradeNo:tradeNo};
      this.getHouseTrade(params);
      this.$router.push({name:"interestdetail"});
      // console.log(window.location.protocol+"//"+window.location.host+"/#/interestdetail")
      // window.location.href=window.location.protocol+"//"+window.location.host+"/#/interestdetail";
    },
    getInterest() {
      console.log(this.userInfo.userId);
      this.getInterestBuilding(this.userInfo.userId);
    },
  },
  created() {
    this.getInterest();
  },
  props: {
    event: {
      type: Object,
    },
  },
  data() {
    return {
      status:false
    };
  },
};
</script>

<style scoped>
* {
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
.a {
  color: none;
  text-decoration: none;
}
.a:hover {
  text-decoration: none;
}
.heart{
  float:right;
  margin-right:5px;
}
</style>
