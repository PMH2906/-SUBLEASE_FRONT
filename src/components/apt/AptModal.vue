<template>
  <div class="modal-container">
    <div>
      <b-card
        class="modal-card"
        no-body
        style="max-width: 20rem"
        img-src="https://placekitten.com/380/200"
        img-alt="Image"
        img-top
        v-for="(house, index) in houses"
        :key="index"
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
            @click="[tradehouse(house.dongCode, house.jibun),$bvModal.show('apttrade')]"
            >거래 매물 +{{cntarr[index]}} </b-button
          >
          <b-button class="card-detail" @click="[detailhouse(house.aptCode),$bvModal.show('aptlist')]">거래 내역</b-button>
        </b-card-footer>
      </b-card>
    <b-modal id="apttrade" scrollable title="거래 매물">
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
  components:{
    AptList,
    AptTradeList
  },
  computed: {
    ...mapState(houseStore, ["houses","cntarr"]),
  },
  data() {
    return {
      isToggle: "false",
    };
  },
    methods: {
    ...mapActions(houseStore, ["getDetailHouse","getTradeList"]),
    async detailhouse(aptCode) {
        this.getDetailHouse(aptCode);
    },
    async tradehouse(dongCode, jibun){
      // console.log(dongCode, jibun)
      const params={dongCode,jibun};
      this.getTradeList(params);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  -ms-overflow-style: none;
}

::-webkit-scrollbar {
  display: none;
}
.modal-container {
  width: 30%;
  height: 80%;
  position: absolute;
  top: 15%;
  left: 65%;
  background-color: white;
  border: 0.5px solid;
  overflow-y: scroll;
  border-radius: 10px;
  z-index: 1;
}
.modal-card {
  margin: 15px;
}
.card-title {
  margin-bottom: 6px;
}
.apt-name {
  font-size: 1.2rm;
}
.card-body {
  padding: 10px;
}
.btn-container {
  display: inline-flex;
}
.card-detail {
  width: 50%;
  text-align: center;
  text-decoration: none;
}
.sub-title{
  position:relative;
}
.likeBtn{
  position:absolute;
  top: 0;
  left: 0;
}
</style>
