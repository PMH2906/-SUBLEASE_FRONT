<template>
  <div>
    <HeaderNavBar></HeaderNavBar>
    <KaKaoMap></KaKaoMap>
    <AptModal v-show="houses.length"></AptModal>
  </div>
</template>

<script>
import HeaderNavBar from "@/components/HeaderNavbar.vue";
import KaKaoMap from "@/components/apt/KakaoMap.vue";
import AptModal from "@/components/apt/AptModal.vue";
import { mapState } from "vuex";
const houseStore = "houseStore";

export default {
  name: "AptView",
  components: {
    HeaderNavBar,
    KaKaoMap,
    AptModal,
  },
  computed: {
    ...mapState(houseStore, ["houses"]),
  },
};
</script>

<style>
</style>
