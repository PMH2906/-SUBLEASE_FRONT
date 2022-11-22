<template>
  <div>
    <!-- <b-table striped hover :items="tradehouse.list" :fields="fields"></b-table> -->
  
<b-card
        class="modal-card"
        no-body
        style="max-width: 12rem"
        img-src="https://placekitten.com/210/200"
        img-alt="Image"
        img-top
        v-for="(house, index) in tradehouse.list"
        :key="index"
      >
        <b-card-body>
          <b-card-title class="apt-name">{{
            house.buildingName
          }}</b-card-title>
          <b-card-sub-title class="sub-title"
            >{{ house.deposit }}, {{ house.managementFee }}</b-card-sub-title
          >
        </b-card-body>
      </b-card>
          </div>
</template>

<script>
import {mapState} from "vuex";
const houseStore = "houseStore";
export default {
    name: "AptTradeList",
 computed:{
    ...mapState(houseStore,["tradehouse"])
 },
data() {
      return {
        fields: ['deposit', 'rentFee', 'managementFee', 'sido','sigungu','bname', 'buildingName','area','floor','startDate','endDate','tradeType', 'trading'],
      }
    }
};
</script>

<style>
 .modal-card{
  display: flex;
 }
</style>