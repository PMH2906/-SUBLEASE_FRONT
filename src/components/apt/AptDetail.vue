<template>
  <div>
    <ProfileNavBar></ProfileNavBar>
    <div class="aptdetail">
      <!-- {{trade_detail}} -->
      <h2 class="apart">{{trade_detail.buildingName}}</h2>
      <div class="heroImg">
        <!-- <img
        class="img"
        :src="`http://localhost:9999/upload/${event.fileInfos[0].saveFolder}/${event.fileInfos[0].saveFile}`"
        alt=""
      /> -->

        <img
          class="second-img" style="width:300px; height:300px; margin: 0 20px;"
          :src="`http://localhost:9999/upload/${trade_detail.fileInfos[index].saveFolder}/${trade_detail.fileInfos[index].saveFile}`" v-for="(item, index) in trade_detail.fileInfos" :key="index"
        />
      </div>
      <div class="content">
        <div class="content-left">
          <div class="content-left-title">가격 정보</div>
          <b-table stacked :items="items1" :fields="fields1"></b-table>
          <div class="content-left-title-other" id="detailInfo">상세 정보</div>
          <b-table :items="items2" :fields="fields2"></b-table>
          <div class="content-left-title-other">옵션</div>
          <div class="icons">
            <div class="icons-item" v-if="trade_detail.commissionOpt">
              <b-icon icon="coin" font-scale="1.8"></b-icon>
              <div>중개 수수료</div>
            </div>
            <div class="icons-item" v-if="trade_detail.insuranceOpt">
              <font-awesome-icon
                icon="fa-solid fa-house-chimney-crack"
                class="icon"
              />
              <div>보험</div>
            </div>
            <div class="icons-item" v-if="trade_detail.parkingOpt">
              <font-awesome-icon
                icon="fa-solid fa-square-parking"
                class="icon"
              />

              <div>주차</div>
            </div>
            <div class="icons-item" v-if="trade_detail.furnitureOpt">
              <font-awesome-icon icon="fa-solid fa-couch" class="icon" />
              <div>가구</div>
            </div>
            <div class="icons-item" v-if="trade_detail.petOpt">
              <font-awesome-icon icon="fa-solid fa-paw" class="icon" />
              <div>애완 동물</div>
            </div>
          </div>
        </div>
        <div class="content-right">
          <div class="content-right-content">
            <div class="rentfee" v-if="!trade_detail.contractType">
              전세 {{ trade_detail.deposit }}
            </div>
            <div class="rentfee" v-if="trade_detail.contractType">
              월세 {{ trade_detail.deposit }} / {{ trade_detail.rentFee }}
            </div>
            <div class="sub-content">
              <div>
                <div>오피스텔</div>
                <div>{{ trade_detail.area }} 평</div>
              </div>
              <div>
                <div>{{ trade_detail.floor }} 층</div>
                <div>{{ trade_detail.rentFee }}</div>
              </div>
            </div>
            <div class="location">
              <span id="location-title">위치</span>
              <div>
                {{ trade_detail.sido }} {{ trade_detail.sigungu }}
                {{ trade_detail.bname }}
              </div>
            </div>
          </div>
          <div class="btn">
            <b-button class="sub-title tradeType">예약하기</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="space">
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ProfileNavBar from "@/components/ProfileNavBar.vue";
const houseStore = "houseStore";
const userStore = "userStore";
export default {
  computed: {
    ...mapState(houseStore, ["trade_detail"]),
    ...mapState(userStore, ["userInfo"]),
  },
  watch: {
    trade_detail: {
      handler: function (val) {
        this.items1=[];
        this.items2=[];
        if(val["rentFee"]){
          this.items1.push({
            deposit: val["deposit"],
            rentFee: val["rentFee"],
            managementFee: val["managementFee"],
          });
          }
        else{
          this.items1.push({
            deposit: val["deposit"],
            rentFee: "없음",
            managementFee: val["managementFee"],
          });
        }
        this.items2.push({
          floor: val["floor"],
          area: val["area"],
          buildYear: val["buildYear"],
        });
        console.log(this.items);
      },
      immediate: true,
    },
  },
  components: {
    ProfileNavBar,
  },
  data() {
    return {
      items1: [],
      items2: [],
      fields1: [
        { key: "deposit", label: "보증금" },
        { key: "rentFee", label: "월세" },
        { key: "managementFee", label: "관리비" },
      ],
      fields2: [
        { key: "floor", label: "층 수" },
        { key: "area", label: "평 수" },
        { key: "buildYear", label: "건축연도" },
      ],
    };
  },
  methods: {
    ...mapActions(houseStore, ["setInterestApt"]),
    //관심지역 등록
    registInterestApt(tradeNo, userId) {
      console.log(tradeNo, userId);
      console.log("REGISTAPT", tradeNo, userId);
      const params = { tradeNo, userId };
      this.setInterestApt(params);
    },
  },
};
</script>

<style scoped>
* {
  color: black;
}
.heroImg {
  display: flex;
  justify-content: center;
  margin: 30px 40px;
}
.first-img {
  width: 40%;
}
.second-img {
  width: 40%;
}
.content {
  display: flex;
  margin: 0 8% 0 12%;
}
.content-left {
  width: 70%;
  height: 400px;
  margin: 40px;
}
.content-left-title{
  font-weight: bold;
  font-size: 20px;
  margin: 0 0 5px 0;
}
.content-left-title-other {
  font-weight: bold;
  font-size: 20px;
  margin: 50px 0 5px 0;
}

.content-right {
  width: 30%;
  height: 400px;
  margin: 40px;
  border: 1px solid;
  box-shadow: 1px 2px grey;
  padding: 10px;
  position: relative;
}

.rentfee {
  font-weight: bold;
  font-size: 20px;
  margin: 20px 0;
  padding-left: 20px;
}
.sub-content {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 20px;
}
.sub-content > div {
  width: 100%;
}
.btn {
  width: 100%;
  padding: 0;
}

.btn.btn-secondary{
  position: absolute;
  bottom: 15%;
  left: 15%;
  width: 70%;
  height: 40px;
}
.location {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
#location-title {
  width: 20%;
  font-weight: bold;
}
.icons {
  display: flex;
  justify-content: space-around;
}
.icons-item {
  text-align: center;
}
.icon {
  font-size: 30px;
}
.apart{
  text-align: center;
  font-weight: bold;
  margin: 40px 0 50px 0;
}
.space{
  height:10vh;
}
</style>
