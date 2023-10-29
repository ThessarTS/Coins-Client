import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useAppStore = defineStore('app', {
  state: () => ({
    baseUrl: 'https://api2.thessarts.site',
    assets: [],
    isLogin: false,
    myCoins: [],
    username: ''
  }),
  actions: {
    async fetchAssets() {
      try {
        let { data } = await axios.get(this.baseUrl + '/coins')
        this.assets = data
        console.log(data);
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `${error.response.status}`,
          text: `${error.response.data.message}`
        })
      }
    },

    async handleLogin(value) {
      try {
        let { data } = await axios.post(this.baseUrl + '/login', value)
        localStorage.setItem('access_token', data.access_token)
        this.username = data.username
        this.isLogin = true
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Welcome\n${data.username}`,
          showConfirmButton: false,
          timer: 2000
        })
        this.$router.push('/markets')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `${error.response.status}`,
          text: `${error.response.data.message}`
        })
      }
    },

    async handleRegister(value) {
      try {
        let { data } = await axios.post(this.baseUrl + '/register', value)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Success! ${data.email} registered with id ${data.id}`,
          showConfirmButton: false,
          timer: 3000
        })
        this.$router.push('/login')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `${error.response.status}`,
          text: `${error.response.data.message}`
        })
      }
    },

    async addToMyCoins(value) {
      try {
        await axios.post(this.baseUrl + '/mycoins', value, {
          headers: { access_token: localStorage.access_token }
        })
        this.$router.push('/mycoins')
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `${error.response.status}`,
          text: `${error.response.data.message}`
        })
      }
    },

    async buyAsset(value) {
      try {
        const { data } = await axios.post(this.baseUrl + '/midtrans-token', { amount: value.amount }, {
          headers: { access_token: localStorage.access_token }
        })

        let cb = this.addToMyCoins

        window.snap.pay(data.token, {
          onSuccess: async function (result) {
            console.log('payment success', result);
            cb(value)
          },
        })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `${error.response.status}`,
          text: `${error.response.data.message}`
        })
      }
    },

    async fetchMyCoins() {
      try {
        let { data } = await axios.get(this.baseUrl + '/mycoins', {
          headers: { access_token: localStorage.access_token }
        })
        this.myCoins = data
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `${error.response.status}`,
          text: `${error.response.data.message}`
        })
      }
    },

    async fetchUsername() {
      try {
        let { data } = await axios.get(this.baseUrl + '/finduser', {
          headers: { access_token: localStorage.access_token }
        })
        this.username = data.username
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: `${error.response.status}`,
          text: `${error.response.data.message}`
        })
      }
    }
  },
})
