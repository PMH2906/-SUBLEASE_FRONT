<template>
  <header>
    <nav class="header-nav">
      <b-row class="text-center">
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
          <b-form-select
            size="sm"
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
          <b-button
            class="btn"
            variant="outline-light"
            @click="registInterestArea(dongCode, userInfo.userId)"
          >
            관심 지역 등록
          </b-button>
        </b-col>
        <b-col class="tag">
          <b-button
            class="btn filter"
            variant="outline-light"
            @click="select('food')"
            >#맛집</b-button
          >
          <b-button
            class="btn filter"
            variant="outline-light"
            @click="select('tour')"
            >#유흥</b-button
          >
          <b-button
            class="btn filter"
            variant="outline-light"
            @click="select('living')"
            >#편의</b-button
          >
        </b-col>
        <b-col>
          <router-link class="bar-item" to="/login" v-if="!userInfo"
            >LOGIN</router-link
          >
          <div v-else>
            <b-icon
              icon="person-fill"
              font-scale="1.5"
              v-if="userInfo"
              style="color: black"
            /><span id="title" />
            <span style="padding: 10px" class="name"
              >{{ userInfo.userName }}님</span
            >
            <span class="bar-item" @click="logout">LOGOUT</span>
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
      "CREATE_MARKER"
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
    setTradeCnt(h){
        h.forEach((e) => {
          const params = { dongCode: this.dongCode, jibun: e.jibun };
          this.getTradeCnt(params);
          console.log(params);
        });
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
        this.makeMarker(list,"food");
      } else if (type === "tour") {
        console.log(type);
        const list = this.building.filter((item) => {
          if (item.category === "관광/여가/오락") {
            return true;
          }
          return false;
        });
        // this.makeMarker(list);
        this.makeMarker(list,"tour");
      } else if (type === "living") {
        const list = this.building.filter((item) => {
          if (item.category === "생활서비스") {
            return true;
          }
          return false;
        });
        // this.makeMarker(list);
        this.makeMarker(list,"living");
      }
    },
    makeMarker(list,type) {
      this.markerPositions = [];
      list.forEach((e) => {
        this.markerPositions.push([e.lat, e.lng]);
      });
      // console.log(this.markerPositions);
      const datas={list,type};
      this.CREATE_MARKER(datas);

    },
    //관심지역 등록
    registInterestArea(dongCode, userId) {
      console.log("REGISTIN", dongCode, userId);
      const params = { dongCode, userId };
      this.setInterestArea(params);
    },
  },
  watch:{
    houses : function () {
      this.setTradeCnt(this.houses);
    },
  }
};
</script>

<style scoped>
* {
  color: #242d54;
}

.header-nav {
  margin-left: 50px;
  padding: 7px 0;
  box-shadow: 0px 4px 5px grey;
  background-color: white;
  height: 43px;
}
.bar-item {
  /* cursor: pointer; */
  text-decoration: none;
}
.custom-select {
  /* border-radius: 20px;
  width: fit-content;
  padding: 0 10px; */
  border: none;
}
/* .bar-item :hover{
  color: #311906;
} */
.login {
  color: black;
}
.btn {
  border: none;
  color: #242d54;
}
.btn.btn-outline-light {
  padding: 0;
}
button:hover {
  /* color: #311906; */
  font-weight: bold;
  background-color: transparent;
  /* transform: scale(1.2); */
}
.bar-item,
a {
  text-decoration: none;
}
.bar-item:hover,
a:hover {
  /* transform: scale(1.2); */
  color: #242d54;
  cursor: pointer;
  font-weight: bold;
}
.btn.filter {
  padding: 0 7px;
}
.name {
  font-weight: bolder;
}
</style>
