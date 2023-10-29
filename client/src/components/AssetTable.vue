<script>
import { mapActions, mapState } from 'pinia'
import { useAppStore } from '../stores/app'
import AssetRow from './AssetRow.vue'
export default {
  components: {
    AssetRow
  },
  computed: {
    ...mapState(useAppStore, ['assets', 'isLogin'])
  },
  methods: {
    ...mapActions(useAppStore, ['fetchAssets'])
  },
  created() {
    this.fetchAssets()
  }
}
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Rank</th>
        <th scope="col">Market</th>
        <th class="text-end" scope="col">Last Price</th>
        <th class="text-center" scope="col">24H Change</th>
        <th v-if="isLogin" scope="col"></th>
      </tr>
    </thead>
  </table>
  <div class="shadow rounded scrollbar-none" id="table-content">
    <table class="table align-middle">
      <tbody>
        <AssetRow v-for="asset in assets" :key="asset.symbol" :asset="asset" />
      </tbody>
    </table>
  </div>
</template>

<style scoped>
#table-content {
  height: 560px !important;
  overflow-y: scroll;
}
.scrollbar-none::-webkit-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  width: 0px; /* Firefox */
}
</style>
