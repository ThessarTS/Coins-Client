<script>
export default {
  props: ['myCoin'],
  computed: {
    idrPrice() {
      return 'Rp.' + this.myCoin.price.toLocaleString('id', 'ID')
    },
    orderDate() {
      return this.myCoin.createdAt.split('T')[0].split('-').reverse().join('-')
    }
  }
}
</script>

<template>
  <div id="content" class="row my-3 shadow">
    <div class="col-2">
      <img id="assetIcon" :src="myCoin.icon" :alt="myCoin.symbol + '-icon'" />
      <span class="ms-2">{{ myCoin.symbol }}</span>
    </div>
    <div class="col-2">{{ myCoin.name }}</div>
    <div class="col-2">{{ myCoin.quantity }}</div>
    <div class="col-2">{{ idrPrice }}</div>
    <div class="col-2">{{ orderDate }}</div>
  </div>
</template>

<style scoped>
#assetIcon {
  height: 32px;
  width: 32px;
}
#content {
  height: 50px;
  align-items: center;
  justify-content: center;
}
</style>
