<script>
import { mapState, mapActions } from 'pinia'
import { useAppStore } from '../stores/app'
import AssetRow from '../components/AssetRow.vue'
import CarouselSection from '../components/CarouselSection.vue'
export default {
  components: {
    AssetRow,
    CarouselSection
  },
  computed: {
    ...mapState(useAppStore, ['isLogin', 'assets']),
    topFive() {
      return this.assets.filter((el) => el.rank <= 5)
    }
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
  <div class="container mb-3">
    <div id="hero" class="row">
      <div id="textbox" class="col-6 d-flex">
        <div>
          <p class="display-4">Welcome! Cryptomania</p>
          <p class="mb-5 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt ea doloribus,
            sapiente deserunt consequuntur totam atque rerum non perspiciatis eligendi praesentium
            vero ratione debitis magnam consequatur provident doloremque alias.
          </p>
          <span v-if="isLogin" class="me-2">
            <router-link to="/mycoins" id="customBtn" class="btn">My Coins</router-link>
          </span>
          <span v-if="!isLogin" class="me-2">
            <router-link to="/login" id="customBtn" class="btn">Log in / Register</router-link>
          </span>
          <span>
            <router-link to="/markets" id="customBtn" class="btn">See Markets</router-link>
          </span>
        </div>
      </div>
      <div class="col-6">
        <img
          class="img-fluid"
          src="https://img.freepik.com/free-vector/cryptocurrency-trading-courses-abstract-concept-illustration_335657-3837.jpg?w=740&t=st=1695733840~exp=1695734440~hmac=768226d58054521f6fbec66841eab7630a6f4cd97636c517c8b33f89d3ef6afa"
          alt="hero-image"
        />
      </div>
    </div>
    <div id="asset-table">
      <div id="top5" class="mb-3 pb-3 ps-2">
        <h5 class="display-6 fw-bold">Top #5 Coins</h5>
      </div>
      <table class="table">
        <tbody>
          <AssetRow v-for="asset in topFive" :key="asset.symbol" :asset="asset" />
        </tbody>
      </table>
    </div>
    <div id="news" class="row">
      <div class="col-6">
        <CarouselSection />
      </div>
      <div class="col-6">
        <p class="display-5">What is CryptoCurrency ?</p>
        <p class="mt-3 text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt ea doloribus,
          sapiente deserunt consequuntur totam atque rerum non perspiciatis eligendi praesentium
          vero ratione debitis magnam consequatur provident doloremque alias. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
        <p class="mb-5 mt-3 text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt ea doloribus,
          sapiente deserunt consequuntur totam atque rerum non perspiciatis eligendi praesentium
          vero ratione debitis magnam consequatur provident doloremque alias. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
        <p class="mb-5 mt-3 text-muted fst-italic">- 28 / 09 /2023</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
#textbox {
  align-items: center;
}
#customBtn {
  color: white;
  background-color: #bc7af9;
}
#top5 {
  background-color: #e3c6ff;
  height: 57px;
  color: #5e5e5e;
}
#asset-table {
  margin-top: 50px;
  margin-bottom: 150px;
}
#hero {
  margin-top: 100px;
}
#news {
  margin-bottom: 100px;
}
</style>
