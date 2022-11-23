<template>
  <div>
    <!-- <b-table striped hover :items="tradehouse.list" :fields="fields"></b-table> -->
    <CardList></CardList>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardList from "@/views/CardList.vue";
const houseStore = "houseStore";
export default {
  name: "AptTradeList",
  computed: {
    ...mapState(houseStore, ["tradehouse"]),
  },
  components: {
    CardList,
  },
  data() {
    return {
      fields: [
        "deposit",
        "rentFee",
        "managementFee",
        "sido",
        "sigungu",
        "bname",
        "buildingName",
        "area",
        "floor",
        "startDate",
        "endDate",
        "tradeType",
        "trading",
      ],
    };
  },
};
</script>

<style>
</style>