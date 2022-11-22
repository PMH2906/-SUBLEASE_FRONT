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
          <b-form-select size="sm"
            v-model="sidoCode"
            :options="sidos"
            @change="gugunList"
          ></b-form-select>
        </b-col>
        <b-col class="sm-3">
          <b-form-select
            v-model="gugunCode"
            :options="guguns"
            @change="dongList"
          ></b-form-select>
        </b-col>
        <b-col class="sm-3">
          <b-form-select
            v-model="dongCode"
            :options="dongs"
            @change="searchApt"
          ></b-form-select>
        </b-col>
        <b-col>
          <button
            class="likeBtn"
            @click="registInterestArea(dongCode, userInfo.userId)"
          >
            관심 지역 등록
          </button>
        </b-col>
        <b-col class="tag">
          <button @click="select('food')">#맛집</button>
          <button @click="select('tour')">#여가</button>
          <button @click="select('living')">#생활</button>
        </b-col>
        <b-col>
          <router-link class="bar-item" to="/login" v-if="!userInfo"
            >로그인</router-link
          >
          <div v-else>
            <span>{{ userInfo.userName }}님</span>
            <span class="bar-item" @click="logout">로그아웃</span>
          </div>
        </b-col>
      </b-row>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
const houseStore = "houseStore";
const userStore = "userStore";
export default {
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
      markerPositions: [],
    };
  },
  computed: {
    name: "HeaderNavbar",
    ...mapState(houseStore, [
      "sidos",
      "guguns",
      "dongs",
      "houses",
      "points",
      "cnts",
      "building",
    ]),
    ...mapState(userStore, ["userInfo"]),
  },
  created() {
    this.CLEAR_SIDO_LIST();
    this.CLEAR_APT_LIST();
    this.CLEAR_DONG_LIST();
    this.getSido();
  },
  methods: {
    ...mapActions(houseStore, [
      "getSido",
      "getGugun",
      "getDong",
      "getHouseList",
      "getPointList",
      "getTradeCnt",
      "getBuildingInfo",
      "setInterestArea",
    ]),
    ...mapActions(userStore, ["userLogout"]),
    ...mapMutations(houseStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_APT_LIST",
      "CLEAR_DONG_LIST",
    ]),
    logout() {
      console.log(this.userInfo);
      this.userLogout(this.userInfo.userId);
      sessionStorage.removeItem("access-token"); //저장된 토큰 없애기
      sessionStorage.removeItem("refresh-token"); //저장된 토큰 없애기
      this.$router.push("/login");
    },
    gugunList() {
      this.CLEAR_GUGUN_LIST();
      this.gugunCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
    dongList() {
      this.CLEAR_DONG_LIST();
      this.dongCode = null;
      if (this.gugunCode) this.getDong(this.gugunCode);
    },
    searchApt() {
      if (this.dongCode) {
        const params = { dongCode: this.dongCode, jibun: this.jibun };
        console.log(this.dongCode);
        this.getPointList(this.dongCode); //
        this.getHouseList(params); //전체 집 리스트
        this.getBuildingInfo(this.dongCode);
        // this.getTradeCnt(this.dongCode, this.jibun)
      }
    },
    select(type) {
      if (type === "food") {
        const list = this.building.filter((item) => {
          console.log(type);
          if (item.category === "음식") {
            return true;
          }
          return false;
        });
        this.makeMarker(list);
      } else if (type === "tour") {
        console.log(type);
        const list = this.building.filter((item) => {
          if (item.category === "관광/여가/오락") {
            return true;
          }
          return false;
        });
        this.makeMarker(list);
      } else if (type === "living") {
        const list = this.building.filter((item) => {
          if (item.category === "생활서비스") {
            return true;
          }
          return false;
        });
        this.makeMarker(list);
      }
    },
    makeMarker(list) {
      this.markerPositions = [];
      list.forEach((e) => {
        this.markerPositions.push([e.lat, e.lng]);
      });
      console.log(this.markerPositions);
    },
    //관심지역 등록
    registInterestArea(dongCode, userId) {
      console.log("REGISTIN", dongCode, userId);
      const params = { dongCode, userId };
      this.setInterestArea(params);
    },
  },
};
</script>

<style scoped>
* {
  color: #25284c;
;
}

.header-nav {
  margin: 0;
  padding: 0;
  height: 40px;
}
.bar-item {
  cursor: pointer;
}
</style>
