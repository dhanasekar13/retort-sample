<template src="./item.html">
</template>
<script>
import { imas } from '@/components/database/table'
import { insertRecord, deleteRecord, queryExecSample, mysql } from '@/components/database/dbConnection'
export default {
  data () {
    return {
      company: '',
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
      hitted: this.modify(),
      full: Object,
      record: Object
    }
  },
  methods: {
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
      var conforms = confirm('Are You sure want to create')
      console.log('create function' + conforms)
      if (conforms) {
        imas.SFLAG = this.itemSampleFlag
        imas.CCode = this.company
        imas.SHCD = this.itemCode
        imas.DESCR = this.itemName
        imas.USE = 'Y'
        imas.PCAPCTY = this.itemPack
        imas.UMN = this.itemPackUnit
        imas.UNIQ = this.itemUnits
        imas.TRPC = this.itemTrad
        imas.MRPC = this.itemMrp
        imas.UNIR = this.itemUnits
        imas.GRPD = this.itemGroup
        imas.BName = this.itemBatch
        imas.TfreeFlag = this.itemTaxFlag
        imas.ScheduleType = this.itemType
        var tablename = 'imas'
        var holdobj = imas
        console.log('This is the holding objhecy' + holdobj)
        insertRecord(tablename, imas).then(function () {
          alert('Inserted Successfully')
        }, function () {
          alert('sorry record is not inserted')
        })
      }
    },
    save: function () {
      var full = imas
      console.log(full)
      if ((imas.SFLAG === this.itemSampleFlag) &&
        (imas.CCode === this.company) &&
        (imas.SHCD === this.itemCode) &&
        (imas.DESCR === this.itemName) &&
        (imas.USE === 'Y') &&
        (imas.PCAPCTY === this.itemPack) &&
        (imas.UMN === this.itemPackUnit) &&
        (imas.UNIQ === this.itemUnits) &&
        (imas.TRPC === this.itemTrad) &&
        (imas.MRPC === this.itemMrp) &&
        (imas.UNIR === this.itemUnits) &&
        (imas.GRPD === this.itemGroup) &&
        (imas.BName === this.itemBatch) &&
        (imas.TfreeFlag === this.itemTaxFlag) &&
        (imas.ScheduleType === this.itemType)) {
        alert('nothing is changed/modified')
      } else {
        if (full.BName !== this.itemBatch) {
          this.record.BName = this.itemBatch
        }
        if (full.DESCR !== this.itemName) {
          this.record.DESCR = this.itemName
        }
        if (full.GRPD !== this.itemGroup) {
          this.record.GRPD = this.itemGroup
        }
        if (full.MRPC !== this.itemMrp) {
          this.record.MRPC = this.itemMrp
        }
        if (full.PCAPCTY !== this.itemPack) {
          this.record.PCAPCTY = this.itemPack
        }
        if (full.SFLAG !== this.itemSampleFlag) {
          this.record.SFLAG = this.itemSampleFlag
        }
        if (full.TRPC !== this.itemTrad) {
          this.record.TRPC = this.itemTrad
        }
        if (full.TfreeFlag !== this.itemTaxFlag) {
          this.record.TfreeFlag = this.itemTaxFlag
        }
        if (full.UMN !== this.itemUnits) {
          this.record.UMN = this.itemUnits
        }
        if (full.UNIQ !== this.itemPackUnit) {
          this.record.UNIQ = this.itemPackUnit
        }
        if (full.UNIR !== this.itemPack) {
          this.record.UNIR = this.itemPack
        }
        if (full.ScheduleType !== this.itemType) {
          this.record.ScheduleType = this.itemType
        }
        console.log(this.record.DESCR)
        alert('this is modified')
      }
      console.log('save function')
    },
    modify: function () {
      console.log('dummy function')
    },
    delete1: function () {
      var vals = { shcd: this.itemCode, company: this.company }
      deleteRecord('imas', vals).then(function () {
        alert('Record Deleted Successfully')
      }, function () {
        alert('sorry record is not deleted')
      })
    },
    changeData: function (data) {
      var query = 'Select * from imas where shcd = ' + mysql.escape(this.itemCode) + '  '
      var current = this
      var value = queryExecSample(query)
      value.then(function (data) {
        if (data.length > 0) {
          alert('hey this record is already existed')
          if (data.length > 0) {
            console.log(data)
            var i = 0
            current.itemName = data[i].DESCR
            current.itemPack = data[i].UMN
            current.itemPackUnit = data[i].PCAPCTY
            current.itemUnits = data[i].UNIQ
            current.itemMrp = data[i].MRPC
            current.itemTrad = data[i].TRPC
            current.itemGroup = data[i].GRPD
            current.itemBatch = data[i].BName
            current.itemType = data[i].UNIR
            current.itemSampleFlag = data[i].SFLAG
            current.itemTaxFlag = data[i].TfreeFlag
            imas.SFLAG = current.itemSampleFlag
            imas.CCode = current.company
            imas.SHCD = current.itemCode
            imas.DESCR = current.itemName
            imas.USE = 'Y'
            imas.PCAPCTY = current.itemPack
            imas.UMN = current.itemPackUnit
            imas.UNIQ = current.itemUnits
            imas.TRPC = current.itemTrad
            imas.MRPC = current.itemMrp
            imas.UNIR = current.itemUnits
            imas.GRPD = current.itemGroup
            imas.BName = current.itemBatch
            imas.TfreeFlag = current.itemTaxFlag
            imas.ScheduleType = current.itemType
            console.log('hey this is the application ')
          }
        }
        return data
      })
    }
  },
  created: function () {
    var current = this
    const storage = require('electron-json-storage')
    console.log(storage.get('login', function (error, data) {
      if (error) throw error
      console.log(data)
      current.company = data.company
      console.log(current.company)
    }))
  },
  watch: {
    'itemCode': 'changeData'
  }
}
</script>
<style src="./item.css"></style>
