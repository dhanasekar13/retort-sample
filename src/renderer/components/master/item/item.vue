<template src="./item.html">
</template>
<script>
import { queryExecSample, mysql } from '@/components/database/dbConnection'
var remote = require('electron').remote
export default {
  data () {
    return {
      itemCode: '',
      itemName: '',
      itemPack: '',
      itemPackUnit: '',
      itemUnits: '',
      itemMrp: '',
      itemTrad: '',
      itemGroup: '',
      itemBatch: '',
      itemType: '',
      itemSampleFlag: '',
      itemTaxFlag: '',
      hitted: this.create()
    }
  },
  methods: {
    create: function () {
      console.log('dhanasekar')
      this.itemCode = ''
    },
    hit: function () {
      console.log('hiited function')
      this.hitted()
      this.itemCode = ''
      this.itemName = ''
      this.itemPack = ''
      this.itemPackUnit = ''
      this.itemUnits = ''
      this.itemMrp = ''
      this.itemTrad = ''
      this.itemGroup = ''
      this.itemBatch = ''
      this.itemType = ''
      this.itemSampleFlag = ''
      this.itemTaxFlag = ''
    },
    change: function (data) {
      this.hitted = data
    },
    creat: function () {
      console.log('create function')
    },
    save: function () {
      console.log('save function')
    },
    modify: function () {
      console.log('modify function')
    },
    delete1: function () {
      console.log('delete function')
    }
  },
  watch: {
    itemcd: function () {
      var query = 'Select * from imas where shcd = ' + mysql.escape(this.itemcd) + '  '
      var value = queryExecSample(query)
      value.then(function (data) {
        if (data.length > 0) {
          alert('hey this record is already existed')
          remote.getCurrentWindow().reload()
        }
        return data
      })
    }
  }
}
</script>
<style src="./item.css"></style>
