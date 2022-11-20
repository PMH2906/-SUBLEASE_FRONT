<template>
  <div>
    <KaKaoMap></KaKaoMap> 
    <AptModal></AptModal>
  </div>
</template>

<script>
import KaKaoMap from "@/components/apt/KakaoMap.vue";
import AptModal from "@/components/apt/AptModal.vue";
export default {
  name: "AptView",
  components: {
    KaKaoMap,
AptModal
  },
};
</script>

<style>
</style>
