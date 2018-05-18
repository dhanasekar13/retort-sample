<template src="./login.html">
</template>
<script>
import { ipcRenderer } from 'electron'
import storage from './database/storage'
export default {
  data () {
    return {
      uname: '',
      pass: '',
      cname: 0,
      period: ''
    }
  },
  mounted () {
    this.onload()
  },
  methods: {
    onload () {
      var date = new Date()
      var last2digitOfYear = date.getFullYear().toString().substr(-2)
      var currentYear = parseInt(last2digitOfYear)
      var year1 = 0
      var year2 = 0
      var currentMonth = date.getMonth() + 1
      if ((currentMonth === 1) || (currentMonth === 2) || (currentMonth === 3)) {
        year1 = currentYear - 1
        year2 = currentYear
      } else {
        year1 = currentYear
        year2 = currentYear + 1
      }
      this.period = year1 + '-' + year2
      console.log(year1)
      console.log(year2)
    },
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
        storage.set('login', {user: this.uname, 'company': this.cname, 'period': this.period})
        ipcRenderer.send('create', 1)
      } else {
        alert('wrong credentials')
      }
    }
  }
}
</script>

<style src="./login.css">
</style>
