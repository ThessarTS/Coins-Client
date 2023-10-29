<script>
import { mapActions } from 'pinia'
import { useAppStore } from '../stores/app'
export default {
  data() {
    return {
      registForm: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useAppStore, ['handleRegister'])
  }
}
</script>

<template>
  <div id="registPage" class="container d-flex">
    <div class="row">
      <div class="col-6">
        <img
          src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7875.jpg?w=740&t=st=1695908826~exp=1695909426~hmac=40999e01d8ba6a39723ff2868edbeb371cefc38e376f8e0149ada5995d58dd6c"
          alt="login-image"
        />
      </div>

      <section class="col-6 pt-5">
        <div class="row">
          <div class="text-center my-3">
            <h3 class="display-5">Register</h3>
            <p class="text-muted">please fill the field below to complete the registration step</p>
          </div>
          <form class="mx-auto" @submit.prevent="handleRegister(registForm)">
            <div class="mb-3">
              <label for="reg-username" class="form-label"
                >Username<span class="text-danger">*</span></label
              >
              <input
                type="text"
                class="form-control"
                id="reg-username"
                required
                v-model="registForm.username"
              />
            </div>
            <div class="mb-3">
              <label for="reg-email" class="form-label"
                >Email address<span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" id="reg-email" v-model="registForm.email" />
            </div>
            <div class="mb-3">
              <label for="reg-password" class="form-label"
                >Password<span class="text-danger">*</span></label
              >
              <input
                type="password"
                class="form-control"
                id="reg-password"
                v-model="registForm.password"
              />
            </div>
            <div class="text-center mt-4">
              <button @click="$router.back()" type="button" class="btn btn-secondary col-4 me-3">
                Cancel
              </button>
              <button type="submit" class="btn customBtn col-4 ms-3">Register</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
#registPage {
  height: 100vh;
  align-items: center;
}
img {
  height: 80vh;
}
form {
  width: 500px;
}
.customBtn {
  color: white;
  background-color: #bc7af9;
}
input {
  border-color: #bc7af9;
}
</style>
