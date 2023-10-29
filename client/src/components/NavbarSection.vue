<script>
import { mapWritableState } from 'pinia'
import { useAppStore } from '../stores/app'
import Swal from 'sweetalert2'
export default {
  computed: {
    ...mapWritableState(useAppStore, ['isLogin'])
  },
  methods: {
    handleLogout() {
      Swal.fire({
        title: 'Are You Sure ?',
        text: 'You are going to logout from your account',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Logout'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear()
          this.isLogin = false
          this.$router.push('/')
          Swal.fire('Done!', 'Success Logout your account.', 'success')
        }
      })
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow">
    <div class="container">
      <router-link to="/" id="navbar-brand" class="text-decoration-none h2 fw-bold mb-0"
        >COIN$</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/markets" class="nav-link">Markets</router-link>
          </li>
          <li v-if="isLogin" class="nav-item">
            <router-link to="/mycoins" class="nav-link">My Coins</router-link>
          </li>
          <li v-if="!isLogin" class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-if="!isLogin" class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li v-if="isLogin" class="nav-item">
            <a @click.prevent="handleLogout" class="btn btn-hover">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#navbar-brand {
  color: #bc7af9;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
</style>
