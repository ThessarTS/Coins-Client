<script>
import { mapActions, mapState } from 'pinia'
import { useAppStore } from '../stores/app'
export default {
  data() {
    return {
      amount: 0
    }
  },
  props: ['asset'],
  computed: {
    ...mapState(useAppStore, ['isLogin']),
    quantity() {
      return (this.amount / this.asset.priceIdr).toFixed(8)
    }
  },
  methods: {
    ...mapActions(useAppStore, ['buyAsset']),
    goToPayment() {
      this.buyAsset({
        amount: this.amount,
        name: this.asset.name,
        symbol: this.asset.symbol,
        price: this.asset.priceIdr,
        quantity: this.quantity,
        icon: this.asset.icon
      })
      this.amount = 0
    }
  }
}
</script>

<template>
  <tr>
    <th scope="row">{{ asset.rank }}</th>
    <td>
      <img id="assetIcon" class="rounded-circle" :src="asset.icon" :alt="asset.name" />
      <span class="ms-3">{{ asset.symbol }} {{ asset.name }}</span>
    </td>
    <td>Rp.{{ asset.priceIdr.toLocaleString('id', 'ID') }}</td>
    <td :class="asset.changePercent24Hr[0] == '-' ? 'text-danger' : 'text-success'">
      {{ asset.changePercent24Hr }}%
    </td>
    <td>
      <button
        v-if="isLogin"
        id="customBtn"
        class="btn"
        data-bs-toggle="modal"
        :data-bs-target="'#' + asset.symbol"
      >
        Buy
      </button>
      <div
        class="modal fade"
        :id="asset.symbol"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div id="m-header" class="modal-header">
              <h1 class="modal-title fs-3 ms-auto text-light" id="exampleModalLabel">Buy Coins</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form @submit.prevent="goToPayment">
              <div class="modal-body row">
                <div class="col-12 mb-3 d-flex align-middle justify-content-center">
                  <img id="assetIcon" class="rounded-circle" :src="asset.icon" :alt="asset.name" />
                  <span class="ms-2 h3">{{ asset.name }}</span>
                </div>
                <div class="col-6">
                  <h4 class="mb-5 fs-5 border py-1 rounded text-end">Price ( IDR )</h4>
                </div>
                <div class="col-6">
                  <h4 class="mb-5 fs-5 border py-1 rounded">
                    {{ asset.priceIdr.toLocaleString('id', 'ID') }}
                  </h4>
                </div>
                <div class="col-6">
                  <h4 class="mb-5 fs-5 border py-1 rounded text-end">
                    Amount ( {{ asset.symbol }} )
                  </h4>
                </div>
                <div class="col-6">
                  <h4 class="mb-5 fs-5 border py-1 rounded">
                    {{ quantity }}
                  </h4>
                </div>
                <div class="col-6">
                  <h4 class="mb-5 fs-5 border py-1 rounded text-end">Buy ( IDR )</h4>
                </div>
                <div class="col-6">
                  <input
                    id="input-buy"
                    class="form-control"
                    type="number"
                    v-model="amount"
                    required
                    min="50000"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button id="customBtn" type="submit" class="btn px-5" data-bs-dismiss="modal">
                  Buy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>

<style scoped>
#assetIcon {
  height: 32px;
  width: 32px;
}
#customBtn {
  color: white;
  background-color: #bc7af9;
}
#m-header {
  background-color: #bc7af9;
}
#billing {
  height: 37px;
}
#input-buy {
  height: 38;
  border-color: #bc7af9;
  font-weight: bold;
}
h4 {
  font-family: monospace;
}
</style>
