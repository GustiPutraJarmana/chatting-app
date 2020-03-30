<template>
<div>


  <div class="container" v-if="!loading">
    <div class="login">
      <form @submit.prevent="login">
        <input type="text" placeholder="email" id="username" v-model="input_email" />
        <input type="password" placeholder="password" id="password" v-model="input_password" />
        <router-link class="forgot" to="/chat/register">Register</router-link>
        <input type="submit" value="Sign In" />
      </form>
    </div>
      <div class="shadow"></div>
  </div>
        <div class="container text-center" style="margin: 0 auto;" v-if="loading">
        <div class="spinner-border text-success" role="status">
        <span class="sr-only">Loading...</span>
        </div>
        </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import url from "../../url/url";
export default Vue.extend({
  name: "Login",
  data() {
    return {
      input_email: "",
      input_password: "",
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true;
      axios({
        url: `${url}/user/login`,
        method: "POST",
        data: {
          email: this.input_email,
          password: this.input_password
        }
      })
        .then(data => {
          this.loading = false;
          this.$router.push({path : "/"});
        })
        .catch(err => {
          this.loading = false;
          console.log(err.response.data.message);
        });
    }
  }
});
</script>

<style scoped>
.login {
  background: #eceeee;
  border: 1px solid #42464b;
  border-radius: 6px;
  height: 257px;
  margin: 20px auto 0;
  width: 298px;
  margin-top: 15%;
}
.login h1 {
  border-bottom: 1px solid #a6abaf;
  border-radius: 6px 6px 0 0;
  box-sizing: border-box;
  color: #727678;
  display: block;
  height: 43px;
  font: 600 14px/1 "Open Sans", sans-serif;
  padding-top: 14px;
  margin: 0;
  text-align: center;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2), 0 1px 0 #fff;
}
input[type="password"],
input[type="text"] {
  /* background: url('http://i.minus.com/ibhqW9Buanohx2.png') center left no-repeat, linear-gradient(top, #d6d7d7, #dee0e0); */
  border: 1px solid #a1a3a3;
  border-radius: 4px;
  box-shadow: 0 1px #fff;
  box-sizing: border-box;
  color: #696969;
  height: 39px;
  margin: 31px 0 0 29px;
  padding-left: 15px;
  transition: box-shadow 0.3s;
  width: 240px;
}
input[type="password"]:focus,
input[type="text"]:focus {
  box-shadow: 0 0 4px 1px rgba(55, 166, 155, 0.3);
  outline: 0;
}
.show-password {
  display: block;
  height: 16px;
  margin: 26px 0 0 28px;
  width: 87px;
}
input[type="checkbox"] {
  cursor: pointer;
  height: 16px;
  opacity: 0;
  position: relative;
  width: 64px;
}
input[type="checkbox"]:checked {
  left: 29px;
  width: 58px;
}
.toggle {
  background: url(http://i.minus.com/ibitS19pe8PVX6.png) no-repeat;
  display: block;
  height: 16px;
  margin-top: -20px;
  width: 87px;
  z-index: -1;
}
input[type="checkbox"]:checked + .toggle {
  background-position: 0 -16px;
}
.forgot {
  color: #7f7f7f;
  display: inline-block;
  float: right;
  font: 12px/1 sans-serif;
  left: -19px;
  position: relative;
  text-decoration: none;
  top: 5px;
  transition: color 0.4s;
}
.forgot:hover {
  color: #3b3b3b;
}
input[type="submit"] {
  width: 240px;
  height: 35px;
  display: block;
  font-family: Arial, "Helvetica", sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 1px 1px 0px #37a69b;
  padding-top: 6px;
  margin: 29px 0 0 29px;
  position: relative;
  cursor: pointer;
  border: none;
  background-color: #37a69b;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #497a78,
    0px 10px 5px #999;
}

.shadow {
  background: #000;
  border-radius: 12px 12px 4px 4px;
  box-shadow: 0 0 20px 10px #000;
  height: 12px;
  margin: 30px auto;
  opacity: 0.2;
  width: 270px;
}

input[type="submit"]:active {
  top: 3px;
  box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #31524d,
    0px 5px 3px #999;
}

@media screen and (max-width: 1050px) {
  .container {
    grid-gap: 5rem;
  }
}

@media screen and (max-width: 1000px) {
  form {
    width: 290px;
  }
  .login-content h2 {
    font-size: 2.4rem;
    margin: 8px 0;
  }
  .img img {
    width: 400px;
  }
}

@media screen and (max-width: 900px) {
  .container {
    grid-template-columns: 1fr;
  }
  .img {
    display: none;
  }
  .wave {
    display: none;
  }
  .login-content {
    justify-content: center;
  }
}
</style>