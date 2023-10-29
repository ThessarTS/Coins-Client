<script>
import NavbarSection from './components/NavbarSection.vue'
import FooterSection from './components/FooterSection.vue'
import { mapActions, mapWritableState } from 'pinia'
import { useAppStore } from './stores/app'
export default {
  components: {
    NavbarSection,
    FooterSection
  },
  computed: {
    ...mapWritableState(useAppStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useAppStore, ['fetchUsername'])
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true
      this.fetchUsername()
    }
  }
}
</script>

<template>
  <NavbarSection />
  <router-view />
  <FooterSection />
</template>
