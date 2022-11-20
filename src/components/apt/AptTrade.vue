<template>
  <div>
  <b-modal id="modal-scrollable" scrollable title="거래 매물">
    <p class="my-4" v-for="i in 20" :key="i">
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </p>
  </b-modal>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>