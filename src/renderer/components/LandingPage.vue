<template>
<div>
<div class="container" align="center">

<h1>SAMPLE APPLICATION</h1>

<form>
<label><b>
Company </b>
</label>
  <select v-model="cname">
  <option value=01>RETORT PHARMACEUTICALS</option>
  <option value=02>RETORT LABORATORIES</option>
  <option value=03>K.C CORPORATION</option>
  </select>
<label><b>
USER NAME</b>
</label>
  <select v-model="uname">
  <option value="Admin">Admin</option>
  <option value="edp">Edp</option>
  <option value="production">Developer</option>
  </select>
  <label> <b> Password</b></label>
  <input type="password" v-model="pass" id="inputtype">
  <small><input type="checkbox" v-on:click="view()">Show Password</small>
  <br><button v-on:click="btn()">LOGIN </button>
</form>
</div>
</div>
</template>

<script>
import { ipcRenderer } from 'electron'
import storage from './database/storage'
export default {
  data () {
    return {
      uname: '',
      pass: '',
      cname: 0
    }
  },
  methods: {
    view () {
      var x = document.getElementById('inputtype')
      if (x.type === 'password') {
        x.type = 'text'
      } else {
        x.type = 'password'
      }
    },
    btn () {
      console.log(this.cname)
      console.log(this.uname)
      console.log(this.pass)
      if (((this.uname === 'Admin') && (this.pass === 'Admin')) || ((this.uname === 'edp') && (this.pass === 'edp'))) {
        storage.set('login', {user: this.uname, 'company': this.cname})
        ipcRenderer.send('create', 1)
      } else {
        alert('wrong credentials')
      }
    }
  }
}
</script>

<style>
button{
width:100%;
height:40px;
border:2px;
background:
}
select{
margin:30px;
padding:3px;
}
input {
margin:25px;
padding:3px;
}
body {
background:#46B
}
h1{
align:"center";
margin-top:50%;
}
.container {
background:oldlace;
float:center;
width:400px;
height:400px;
margin:0 auto;
}
form {

align:"center";
margin-top: 40px;
}
label {
margin:20px;
}
</style>
