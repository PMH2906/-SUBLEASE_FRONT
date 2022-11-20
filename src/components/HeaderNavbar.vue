<template>
  <header>
    <nav class="header-nav">
  <b-row class="mt-4 mb-4 text-center">
      <!-- <b-col class="sm-3">
        <b-form-input
          v-model.trim="dongCode"
          placeholder="동코드 입력...(예 : 11110)"
          @keypress.enter="sendKeyword"
        ></b-form-input>
      </b-col>
      <b-col class="sm-3" align="left">
        <b-button variant="outline-primary" @click="sendKeyword">검색</b-button>
      </b-col> -->
      <b-col class="sm-3">
        <b-form-select v-model="sidoCode" :options="sidos" @change="gugunList"></b-form-select>
      </b-col>
      <b-col class="sm-3">
        <b-form-select v-model="gugunCode" :options="guguns" @change="dongList"></b-form-select>
      </b-col>
      <b-col class="sm-3">
        <b-form-select v-model="dongCode" :options="dongs" @change="searchApt"></b-form-select>
      </b-col>
      <b-col class="tag">
        <button>#맛집</button>
        <button>#관광</button>
        <button>#부동산</button>
      </b-col>
    </b-row>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
const houseStore = "houseStore";
export default {
data() {
    return {
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
    };
  },
  computed: {
    name:"HeaderNavbar",
    ...mapState(houseStore, ["sidos", "guguns", "dongs","houses","points","cnts"]),
  },
  created() {
    this.CLEAR_SIDO_LIST();
    this.CLEAR_APT_LIST();
    this.CLEAR_DONG_LIST();
    this.getSido();
  },
  methods: {
    ...mapActions(houseStore, ["getSido", "getGugun", "getDong" , "getHouseList","getPointList","getTradeCnt"]),
    ...mapMutations(houseStore, ["CLEAR_SIDO_LIST", "CLEAR_GUGUN_LIST", "CLEAR_APT_LIST","CLEAR_DONG_LIST"]),
    gugunList() {
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
    dongList(){
      this.CLEAR_DONG_LIST();
      this.dongCode=null;
      if(this.gugunCode) this.getDong(this.gugunCode);
    },
    searchApt() {
      if (this.dongCode) {
        this.getHouseList(this.dongCode);
        this.getPointList(this.gugunCode);
        // this.getTradeCnt(this.dongCode, this.jibun)
      }
    },
  },
};
</script>

<style scoped>
.header-nav {
  margin:0;
  padding:0;
  height: 40px;
}

</style>
