<template>
  <div>
    <div id="id">
      <div class="container d-flex flex-column" style="man-width:300px; width: 70%; height:500px; background-color: #eceeee;">
        <dir class="border row" style="height: 50px;">This is Header</dir>
      <div class="row" style="height:500px">
        <div class="col-sm-4 border d-flex flex-column">
          <div class="container text-center" style="font-size:30px">
            <i class="far fa-user-circle" style="font-size:3em"></i>
          </div>
          <div class="container border text-center">
           This is username
          </div>
          <div class="container border mt-2 text-center">
            This is room
          </div>
          <div class="container text-center mt-2">
            <button type="button" class="btn btn-outline-danger">Leave Chat</button>
          </div>
          <div class="container mt-3 text-center">
            <img class="sm w-100%" style="width:130px"  src="https://banner2.cleanpng.com/20180209/gfq/kisspng-table-cartoon-meeting-royalty-free-business-meeting-5a7e50eff09169.4335481115182276959854.jpg" alt="">
          </div>
        </div>
        <div class="col-sm-8 border d-flex flex-column">
           
          <div class="container border" style="border-radius: 220px 120px 120px 0px;
               
                border: 0px solid #000000;">
             <div style="width:auto;">
            <span class="ml-3">username</span>
            <span class="ml-3 mb-5">time</span>
            </div>TEX MASUK SINI</div>
          </div>
          <div class="container border">
            <form>
            <div class="input-group mb-3">
              <input type="text" class="form-control mr-3" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-info " type="button">Button</button>
              </div>
            </div>
            </form>
          </div>
           </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
const moment = require('moment')
export default Vue.extend ({
name : 'chatting',
data() {
  return {
  messages : [],
  input_name : '',
  input_message : '',
  inpu_time : ''
  }
},
mounted() {
socket.on('send back', (message) => {
      this.messages.push(message)
});
},
methods : {
  sendMessage() {
    const message = {
      name : this.input_name,
      message : this.input_message,
      time : moment().format('h:mm a')
    }
    this.messages.push(message)
     socket.emit('send message', message);
     this.input_name = '',
     this.input_message = ""
  }
}
})
</script>

<style scoped>
</style>