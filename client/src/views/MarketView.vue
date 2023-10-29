<script>
import AssetTable from '../components/AssetTable.vue'
import ChatBox from '../components/ChatBox.vue'
import { mapState } from 'pinia'
import { useAppStore } from '../stores/app'
export default {
  components: {
    AssetTable,
    ChatBox
  },
  computed: {
    ...mapState(useAppStore, ['isLogin'])
  }
}
</script>

<template>
  <div class="container">
    <h3 class="display-5 mb-3">Markets</h3>
    <div v-if="isLogin" class="row">
      <div class="col-md-7">
        <AssetTable />
      </div>
      <div class="col-md-5">
        <ChatBox />
      </div>
    </div>
    <div v-else>
      <AssetTable />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 80px;
}
</style>
