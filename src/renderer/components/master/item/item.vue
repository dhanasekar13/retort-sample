<template src="./item.html">
</template>
<script>
import { queryExecSample, mysql } from '@/components/database/dbConnection'
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
    },
    changeData: function (data) {
      for (var i = 0; i < data.length; i++) {
        this.itemName = data[i].DESCR
        this.itemPack = data[i].UMN
        this.itemPackUnit = data[i].PCAPCTY
        this.itemUnits = data[i].UNIQ
        this.itemMrp = data[i].MRPC
        this.itemTrad = data[i].TRPC
        this.itemGroup = data[i].GRPD
        this.itemBatch = data[i].Bname
        this.itemType = data[i].UNIR
        this.itemSampleFlag = data[i].SFLAG
        this.itemTaxFlag = data[i].TfreeFlag
      }
    }
  },
  watch: {
    itemCode: {
      handler: function (val, oldval) {
        var query = 'Select * from imas where shcd = ' + mysql.escape(this.itemCode) + '  '
        var value = queryExecSample(query)
        value.then(function (data) {
          if (data.length > 0) {
            alert('hey this record is already existed')
            if (data.length > 0) {
              this.changeData(data)
            }
            console.log(data)
          }
          return data
        })
      },
      deep: true
    }
  }
}
</script>
<style src="./item.css"></style>
