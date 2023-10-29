<script>
import io from 'socket.io-client'
const socket = io('https://api2.thessarts.site')
import { mapState } from 'pinia'
import { useAppStore } from '../stores/app'
export default {
  data() {
    return {
      text: '',
      chats: []
    }
  },
  computed: {
    ...mapState(useAppStore, ['username'])
  },
  methods: {
    sendMessages() {
      socket.emit('message', { username: this.username, messages: this.text })
      this.text = ''
    }
  },
  created() {
    socket.on('connection')
    socket.emit('message', {})
    socket.on('broadcast', (data) => {
      console.log('messageRecieved')
      this.chats = data
    })
  }
}
</script>

<template>
  <div id="chatbox">
    <h4 class="text-center">Live Chats</h4>
    <div id="output" class="p-3 rounded bg-gradient scrollbar-none">
      <div
        v-for="(chat, i) in chats"
        :key="i"
        id="bubble"
        :class="
          username == chat.username
            ? 'rounded bg-light p-2 my-3 ms-auto'
            : 'rounded bg-light p-2 my-3'
        "
      >
        <h6 class="m-0">{{ chat.username }}</h6>
        <p class="m-0">{{ chat.messages }}</p>
      </div>
    </div>
    <div id="input" class="py-0 my-0 mt-3">
      <div class="row">
        <div class="col-10">
          <input
            type="text"
            v-model="text"
            class="form-control w-100 h-100 shadow-none rounded-pill"
          />
        </div>
        <div class="col-2 ms-0 ps-0">
          <div class="d-flex align-items-center h-100">
            <button @click="sendMessages" id="customBtn" class="btn w-100 rounded-pill">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#customBtn {
  color: white;
  background-color: #bc7af9;
}
#output {
  background-color: #efe7f5;
  height: 520px;
  overflow-y: scroll;
}
#chatbox {
  width: 100%;
}
#bubble {
  width: 220px;
}
.scrollbar-none::-webkit-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  width: 0px; /* Firefox */
}
</style>
