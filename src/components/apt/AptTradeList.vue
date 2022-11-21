<template>
  <div>
    <b-table striped hover :items="tradehouse.list" :fields="fields"></b-table>
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

</style>