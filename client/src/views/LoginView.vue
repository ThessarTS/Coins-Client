<script>
import { mapActions } from 'pinia'
import { useAppStore } from '../stores/app'
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useAppStore, ['handleLogin'])
  }
}
</script>

<template>
  <div id="login-page" class="d-flex justify-content-center">
    <div class="row">
      <div class="col-6">
        <img
          src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7873.jpg?w=740&t=st=1695896552~exp=1695897152~hmac=58decdb3acf94745522fc1968efd00d6820c621e895503aecd98badd414c184f"
          alt="login-image"
        />
      </div>
      <section class="col-6" id="login">
        <div class="pt-5">
          <div class="text-center mb-5">
            <h2 class="display-5">Login</h2>
            <p class="text-muted">Login to your account by complete the fields below</p>
          </div>
          <form @submit.prevent="handleLogin(loginForm)" class="mx-auto" id="login-form">
            <div class="mb-3">
              <label for="login-email" class="form-label"
                >Email address<span class="text-danger">*</span></label
              >
              <input
                v-model="loginForm.email"
                type="email"
                class="form-control"
                id="login-email"
                required
              />
            </div>
            <div class="mb-3">
              <label for="login-password" class="form-label"
                >Password<span class="text-danger">*</span></label
              >
              <input
                v-model="loginForm.password"
                type="password"
                class="form-control"
                id="login-password"
                required
              />
            </div>
            <div class="text-center mt-4">
              <button id="customBtn" type="submit" class="btn col-4">Login</button>
            </div>
          </form>
          <div class="mt-5 text-center align-middle">
            <span>don't have an account?</span>
            <router-link to="/register" class="btn btn-link align-middle px-1 pb-3">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512">
                <path
                  d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                />
              </svg>
              Register
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
svg {
  fill: #005eff;
}
img {
  width: 100%;
}
form {
  width: 500px;
}
#login-page {
  height: 100vh;
  align-items: center;
}
#customBtn {
  background-color: #bc7af9;
  color: white;
}
input {
  border-color: #bc7af9;
}
</style>
