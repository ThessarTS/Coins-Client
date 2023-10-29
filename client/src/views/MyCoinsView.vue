<script>
import { mapActions, mapState } from 'pinia'
import { useAppStore } from '../stores/app'
import MyCoinRow from '../components/MyCoinsRow.vue'
export default {
  components: {
    MyCoinRow
  },
  computed: {
    ...mapState(useAppStore, ['myCoins'])
  },
  methods: {
    ...mapActions(useAppStore, ['fetchMyCoins'])
  },
  created() {
    this.fetchMyCoins()
  }
}
</script>

<template>
  <div class="container">
    <h1>My Coins</h1>
    <div class="my-5">
      <div class="row justify-content-center">
        <div class="col-2 h5">Symbol</div>
        <div class="col-2 h5">Name</div>
        <div class="col-2 h5">Qty</div>
        <div class="col-2 h5">Price</div>
        <div class="col-2 h5">Order Date</div>
      </div>
      <MyCoinRow v-for="myCoin in myCoins" :key="myCoin.id" :myCoin="myCoin" />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 100px;
  margin-bottom: 100px;
  min-height: 80vh;
}
</style>
