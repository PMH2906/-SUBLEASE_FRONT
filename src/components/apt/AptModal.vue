<template>
  <div class="modal-container">
    <div>
      <b-card
        class="modal-card"
        no-body
        img-src="http://cdn.ksilbo.co.kr/news/photo/202008/770672_439915_052.jpg"
        img-alt="Image"
        img-top
        v-for="house in houses"
        :key="house.jibun"
      >
        <b-card-body>
          <b-card-title class="apt-name">{{
            house.apartmentName
          }}</b-card-title>
          <b-card-sub-title class="sub-title"
            >{{ house.dong }}, {{ house.buildYear }}</b-card-sub-title
          >
        </b-card-body>

        <b-card-footer class="btn-container">
          <b-button
            class="card-detail"
            variant="outline-light"
            @click="
              [
                tradehouse(house.dongCode, house.jibun),
                $bvModal.show('apttrade'),
              ]
            "
            >거래 매물 <span class="cnt" v-for="cnt in cntarr" :key=cnt.jibun><span v-if="cnt.jibun==house.jibun">{{ cnt.cnt }}</span></span></b-button
          >
          <b-button
            variant="outline-light"
            class="card-detail"
            @click="[detailhouse(house.aptCode), $bvModal.show('aptlist')]"
            >거래 내역</b-button
          >
        </b-card-footer>
      </b-card>
      <b-modal id="apttrade" size="xl" height="800" scrollable>
        <template #modal-title> 해당 아파트 거래 매물 </template>
        <AptTradeList></AptTradeList>
      </b-modal>

      <b-modal id="aptlist" scrollable title="거래 내역">
        <AptList></AptList>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AptList from "@/components/apt/AptList.vue";
import AptTradeList from "@/components/apt/AptTradeList.vue";
const houseStore = "houseStore";
export default {
  name: "AptModal",
  components: {
    AptList,
    AptTradeList,
  },
  computed: {
    ...mapState(houseStore, ["houses", "cntarr"]),
  },
  data() {
    return {
      isToggle: "false",
    };
  },
  methods: {
    ...mapActions(houseStore, ["getDetailHouse", "getTradeList"]),
    async detailhouse(aptCode) {
      this.getDetailHouse(aptCode);
    },
    async tradehouse(dongCode, jibun) {
      // console.log(dongCode, jibun)
      const params = { dongCode, jibun };
      this.getTradeList(params);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  color: black;
}
.modaltitle{
  color:black;
}
body {
  -ms-overflow-style: none;
}

::-webkit-scrollbar {
  display: none;
}
.modal-container {
  width: 25%;
  height: 85%;
  position: absolute;
  top: 10%;
  right: 2%;
  background-color: white;
  border: 0.5px solid;
  overflow-y: scroll;
  border-radius: 10px;
  z-index: 1;
  background: rgba(255, 255, 255, 0.7);
  border: none;
}
.modal-card {
  margin: 30px;
  /* border: none; */
}
.card-title {
  margin-bottom: 6px;
}
.apt-name {
  font-size: 1.2rm;
  color: #242d54;
  text-align: center;
}
.card-body {
  text-decoration: none;
  padding: 10px;
  text-align: center;
}
.btn-container {
  display: inline-flex;
}
.card-detail {
  width: 300px;
  margin: 5px;
  color: #242d54;
  /* font-weight: bold; */
  /* border: 1px solid #2f2d38 ; */
  /* background-color: #2f2d38; */
  border: none;
}

.card-detail:hover {
  width: 300px;
  margin: 5px;
  color: #242d54;
  /* border: 1px solid #311906 ; */
  background-color: transparent;
  font-weight: bold;
}

.sub-title {
  position: relative;
}
.likeBtn {
  position: absolute;
  top: 0;
  left: 0;
}
.cnt {
  padding: 5px;
  color: #2f2d38;
}
#apttrade {
  color: black;
}
.modal-title{
  color: black;
}
</style>
감추기
양현용[서울_11반]에 글쓰기