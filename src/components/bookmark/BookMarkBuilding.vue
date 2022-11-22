<template>
  <div>
    <div class="bookmark-container">
      <div class="bookmark-left">
        <b-table
          striped
          hover
          class="table"
          :items="interest_building.list"
          :fields="fields"
          @row-clicked="toDetail"
        >
          <template #cell(show_details)="row">
            <b-button size="sm" @click="row.toggleDetails" class="mr-2">
              상세정보
            </b-button>
          </template>
          <template #row-details="row">
            <b-card>
              <b-row class="mb-2" v-if="interest_building.list[row.index].livingType">
                <b-col sm="3" class="text-sm-right"><b>전/월세:</b></b-col>
                <b-col>{{ interest_building.list[row.index].deposit }} / {{ interest_building.list[row.index].rentFee }} 만원</b-col>
              </b-row>
              <b-row class="mb-2" v-else>
                <b-col sm="3" class="text-sm-right"><b>전세:</b></b-col>
                <b-col>{{ interest_building.list[row.index].deposit}} 만원</b-col>
              </b-row>

              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>관리비:</b></b-col>
                <b-col>{{ interest_building.list[row.index].managementFee }} 만원</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>층:</b></b-col>
                <b-col>{{ interest_building.list[row.index].floor }} 층</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>면적:</b></b-col>
                <b-col>{{ interest_building.list[row.index].area }} 평</b-col>
              </b-row>
              <b-row class="mb-2" v-if="interest_building.list[row.index].startDate">
                <b-col sm="3" class="text-sm-right"><b>전대 시작일:</b></b-col>
                <b-col>{{ interest_building.list[row.index].startDate }}</b-col>
              </b-row>
              <b-row class="mb-2" v-if="interest_building.list[row.index].endDate">
                <b-col sm="3" class="text-sm-right"><b>전대 마감일:</b></b-col>
                <b-col>{{ interest_building.list[row.index].endDate }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>주차 가능:</b></b-col>
                <b-col>{{ interest_building.list[row.index].parkingOpt ? "가능" : "불가능" }}</b-col>
              </b-row>
               <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>대출 가능:</b></b-col>
                <b-col>{{ interest_building.list[row.index].loanOpt ? "가능" : "불가능" }}</b-col>
              </b-row>
              <b-row class="mb-2">
                <b-col sm="3" class="text-sm-right"><b>반려 동물:</b></b-col>
                <b-col>{{ interest_building.list[row.index].petOpt ? "가능" : "불가능" }}</b-col>
              </b-row>
              {{items}}
            </b-card>
          </template>
        </b-table>
      </div>
      <div class="bookmark-right">
        <KaKaoMap></KaKaoMap>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import KaKaoMap from "@/components/apt/KakaoMap.vue";
const houseStore = "houseStore";
const userStore = "userStore";
export default {
  name: "BookMarkBuilding",
  components: {
    KaKaoMap,
  },
  computed: {
    ...mapState(houseStore, ["interest_building"]),
    ...mapState(userStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(houseStore, ["getInterestBuilding", "getHouseList"]),
    getInterest() {
      console.log(this.userInfo.userId);
      this.getInterestBuilding(this.userInfo.userId);
    },
    toDetail(rows) {
      console.log(rows);
      const params = { dongCode: rows.bcode };
      this.getHouseList(params);
    },
  },
  created() {
    this.getInterest();
  },
  data() {
    return {
      fields: ["sido", "sigungu", "bname", "buildingName", "show_details"],
    };
  },
};
</script>

<style scoped>
.bookmark-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
}
.bookmark-left {
  width: 50%;
  height: 100vh;
}
.table {
  text-align: center;
  justify-content: center;
  align-items: center;
}
.bookmark-right {
  width: 50%;
  height: 100vh;
}
</style>
