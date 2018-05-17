<template>
 <div>
 <div class="container" align=center>
    <h1>Documentation/Sop for sample application</h1>
    <p>


    </p>
    </div>
 </div>
</template>
<script>
import { ipcRenderer } from 'electron'
export default {

  methods: {
    btn () {
      ipcRenderer.send('create', 1)
    }
  },
  created () {
    const storage = require('electron-json-storage')
    console.log(storage.get('login', function (error, data) {
      if (error) throw error
      console.log(data)
    }))
  }
}
</script>
<style>
body{
background:lightgrey
}
.container {
background:white;
float:center;
width:800px;
margin:0 auto;
}
</style>
