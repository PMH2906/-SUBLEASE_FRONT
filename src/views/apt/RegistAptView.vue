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
        v-for="(house, index) in houses" :key="index"
      >
        <b-card-body>
          <b-card-title class="apt-name">{{house.apartmentName}}</b-card-title>
          <b-card-sub-title >{{house.dong}}, {{house.buildYear}}</b-card-sub-title>
        </b-card-body>

        <b-card-footer class="btn-container">
          <a href="#" class="card-detail">거래 매물</a>
          <a href="#" class="card-detail">거래 내역</a>
        </b-card-footer>
      </b-card>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";
const houseStore = "houseStore";
export default {
  name:"AptModal",
  computed:{
      ...mapState(houseStore, ["houses"])
  }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
body{
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
  border: 0.5px solid ;
  overflow-y: scroll;
  border-radius: 10px;
}
.modal-card{
    margin: 15px;
}
.card-title{
    margin-bottom:6px;
}
.apt-name{
    font-size: 1.2rm;
}
.card-body{
    padding:10px;
}
.btn-container{
    display: inline-flex;
}
.card-detail{
    width:50%;
    text-align: center;
    text-decoration: none;
}
</style>
