<template>
  <div>
    <b-table striped hover :items="house" :fields="fields"></b-table>
    </div>
</template>

<script>
import {mapState} from "vuex";
const houseStore = "houseStore";
export default {
    name: "AptList",
 computed:{
    ...mapState(houseStore,["house"])
 },
data() {
      return {
        fields: ['dealAmount', 'dealYear', 'dealMonth', 'dealDay','area','floor'],
      }
    }
};
</script>

<style>
  
</style>
