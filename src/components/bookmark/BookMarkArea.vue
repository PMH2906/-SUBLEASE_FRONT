<template>
  <div>
    <div class="bookmark-container">
      <div class="bookmark-left">
        <b-table
          striped
          hover
          class="table"
          :items="interest_area.list"
          :fields="fields"
          @row-clicked="toDetail"
        ></b-table>
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
  name: "BookMarkArea",
  components: {
    KaKaoMap,
  },
  computed: {
    ...mapState(houseStore, ["interest_area"]),
    ...mapState(userStore, ["userInfo"]),
  },
  methods: {
    ...mapActions(houseStore, ["getInterestArea","getHouseList"]),
    getInterest() {
      console.log(this.userInfo.userId);
      this.getInterestArea(this.userInfo.userId);
    },
    toDetail(rows){
      const params={dongCode:rows.dongCode};
      this.getHouseList(params);
    }
  },
  created() {
    this.getInterest();
  },
  data() {
    return {
      fields: [
        "sidoName",
        "gugunName",
        "dongName",
      ],
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
.table{
  text-align: center;
  justify-content: center;
  align-items: center;
}
.bookmark-right {
  width: 50%;
  height: 100vh;
}
</style>
