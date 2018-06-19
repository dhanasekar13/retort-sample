<template src="./gatepass.html">

</template>
<script>
import { remote } from 'electron'
import { queryExecSample, mysql } from '@/components/database/dbConnection'
import { gatepass } from '@/components/database/table'
export default {
  data () {
    return {
      itemcd: '',
      company: '',
      itemmas: '',
      gpbatch: '',
      gpqty: '',
      gpno: '',
      gprate: '',
      gpmrp: '',
      gpunit: '',
      gpmfgdt: '',
      gpexpdt: '',
      gpflag: '',
      hitted: this.dummy(),
      period: ''
    }
  },
  created: function () {
    var current = this
    const storage = require('electron-json-storage')
    console.log(storage.get('login', function (error, data) {
      if (error) throw error
      console.log(data)
      current.company = data.company
      current.period = data.period
      console.log(current.company)
      var query = 'SELECT * FROM `imas` WHERE `CCode`=' + mysql.escape(current.company)
      var value = queryExecSample(query)
      value.then(function (data) {
        if (data.length > 0) {
          console.log(data)
          current.itemmas = data
        }
      })
    }))
  },
  methods: {
    dummy: function () {

    },
    hit: function () {
      console.log('hitted function')
      this.hitted()
    },
    change: function (data) {
      this.hitted = data
    },
    setgatepass: function () {
      gatepass.CCode = this.company
      gatepass.period = this.period
      gatepass.GPNo = this.gpno
      gatepass.GPDate = this.gpdate
      gatepass.ItemCd = this.itemcd.SHCD
      gatepass.BatchNo = this.gpbatch
      gatepass.Qty = this.gpqty
      gatepass.Rate = this.gprate
      gatepass.MRP = this.gpmrp
      gatepass.Unit = this.gpunit
      gatepass.MfgDt = this.gpmfgdt
      gatepass.ExpDt = this.gpexpdt
      gatepass.EDFlag = this.gpflag
      gatepass.SFlag = 'N'
    },
    creat: function () {
      var current = this
      console.log('create function')
      var conforms = confirm('Are you sure want to create gate pass')
      if (conforms) {
        current.setgatepass()
        console.log(gatepass)
        console.log('wait thinking about the logic of the application to build the system in the presence')
        var sqlcntl = 'SELECT * FROM `stkcntl` WHERE `itemcd` = ' + mysql.escape(this.itemcd.SHCD) + ' and `ccode` = ' + mysql.escape(this.company)
        var sqldetl = 'SELECT * FROM `stkdetl` WHERE `itemcd` = ' + mysql.escape(this.itemcd.SHCD) + ' and `batchno` = ' + mysql.escape(this.gpbatch) + ' and `ccode` = ' + mysql.escape(this.company)
        console.log(sqlcntl)
        console.log(sqldetl)
        var valuecntl = queryExecSample(sqlcntl)
        valuecntl.then(function (data) {
          if (data.length > 0) {
            console.log(data)
            console.log(current.gpqty)
            var updatestkcntl = 'Update `Stkcntl` set `recqtytot` = `recqtytot` + ' + mysql.escape(current.gpqty) + ', `runqty` = `runqty` + ' + mysql.escape(current.gpqty) + ' where `itemcd` = ' + mysql.escape(current.itemcd.SHCD) + ' and `ccode` = ' + mysql.escape(current.company)
            console.log(updatestkcntl)
            var value1 = queryExecSample(updatestkcntl)
            value1.then(function (data) {
              console.log(data)
            })
            var value2 = queryExecSample(sqldetl)
            value2.then(function (data) {
              if (data.length > 0) {
                console.log(data)
                var updatestkdetl = 'Update `Stkdetl` set `qty` = `qty` + ' + mysql.escape(current.gpqty) + ', `rate` = ' + mysql.escape(current.gpqty) + ', EDFlag = ' + mysql.escape(current.gpflag) + ' where `itemcd` = ' + mysql.escape(current.itemcd.SHCD) + ' and `batchno` = ' + mysql.escape(current.gpbatch) + ' and `ccode` = ' + mysql.escape(current.company)
                console.log(updatestkdetl)
                var value4 = queryExecSample(updatestkdetl)
                value4.then(function (data) {
                  console.log(data)
                })
              } else {
                var insertstkdetl = 'INSERT INTO stkdetl(CCode,ItemCd,BatchNo,RecDate,Qty,QUnit,RATE,MRP,RUnit,MfgDt,ExpDt,EDFlag) values(' + mysql.escape(current.company) + ', ' + mysql.escape(current.itemcd.SHCD) + ', ' + mysql.escape(current.gpbatch) + ', ' + mysql.escape(current.gpdate) + ', ' + mysql.escape(current.gpqty) + ', ' + mysql.escape(current.itemcd.UNIQ) + ', ' + mysql.escape(current.gprate) + ', ' + mysql.escape(current.gpmrp) + ', ' + mysql.escape(current.gpunit) + ',' + mysql.escape(current.gpmfgdt) + ', ' + mysql.escape(current.gpexpdt) + ', ' + mysql.escape(current.gpflag) + ')'
                console.log(insertstkdetl)
                var value5 = queryExecSample(insertstkdetl)
                value5.then(function (data) {
                  console.log(data)
                })
              }
            })
          } else {
            var insertstkdetl1 = 'INSERT INTO stkdetl(CCode,ItemCd,BatchNo,RecDate,Qty,QUnit,RATE,MRP,RUnit,MfgDt,ExpDt,EDFlag) values(' + mysql.escape(current.company) + ', ' + mysql.escape(current.itemcd.SHCD) + ', ' + mysql.escape(current.gpbatch) + ', ' + mysql.escape(current.gpdate) + ', ' + mysql.escape(current.gpqty) + ', ' + mysql.escape(current.itemcd.UNIQ) + ', ' + mysql.escape(current.gprate) + ', ' + mysql.escape(current.gpmrp) + ', ' + mysql.escape(current.gpunit) + ',' + mysql.escape(current.gpmfgdt) + ', ' + mysql.escape(current.gpexpdt) + ', ' + mysql.escape(current.gpflag) + ')'
            console.log(insertstkdetl1)
            var value6 = queryExecSample(insertstkdetl1)
            value6.then(function (data) {
            })
            var insertstkcntl1 = 'Insert into stkcntl (CCode,itemcd,OpDate,OBQty,OBVal,RecQtytot,RunQty) values(' + mysql.escape(current.company) + ', ' + mysql.escape(current.itemcd.SHCD) + ', ' + mysql.escape(current.gpdate) + ', ' + mysql.escape(current.gpqty) + ', ' + mysql.escape(0) + ', ' + mysql.escape(current.gpqty) + ', ' + mysql.escape(current.gpqty) + ')'
            console.log(insertstkcntl1)
            var value7 = queryExecSample(insertstkcntl1)
            value7.then(function (data) {
            })
          }
        })
        var insertgatepass = 'INSERT INTO `gatepass`(`CCode`, `period`, `GPNo`, `GPDate`, `ItemCd`, `BatchNo`, `Qty`, `Rate`, `MRP`, `Unit`, `MfgDt`, `ExpDt`, `EDFlag`, `SFlag`) VALUES (' + mysql.escape(current.company) + ', ' + mysql.escape(current.period) + ', ' + mysql.escape(current.gpno) + ', ' + mysql.escape(current.gpdate) + ', ' + mysql.escape(current.itemcd.SHCD) + ', ' + mysql.escape(current.gpbatch) + ', ' + mysql.escape(current.gpqty) + ', ' + mysql.escape(current.gprate) + ', ' + mysql.escape(current.gpmrp) + ', ' + mysql.escape(current.gpunit) + ', ' + mysql.escape(current.gpmfgdt) + ', ' + mysql.escape(current.gpexpdt) + ', ' + mysql.escape(current.gpflag) + ', ' + mysql.escape('S') + ') '
        console.log(insertgatepass)
        var value8 = queryExecSample(insertgatepass)
        value8.then(function (data) {
        })
      }
      this.reload()
    },
    reload: function () {
      remote.getCurrentWindow().reload()
    },
    save: function () {
      console.log('Save function')
    },
    prompt: function () {
      return new Promise(function (resolve, reject) {
        const prompt = require('electron-prompt')
        prompt({
          title: 'Enter the GP NO',
          type: 'input',
          label: 'ENTER THE GATE PASS NO..'
        })
          .then((r) => {
            resolve(r)
          })
      })
    },
    promptb: function (data) {
      return new Promise(function (resolve, reject) {
        var length = data.length
        var val = []
        for (var i = 0; i < length; i++) {
          val[i] = data[i].BatchNo
        }
        const prompt = require('electron-prompt')
        prompt({
          title: 'Select the Batch to DELETE FROM DB',
          label: 'Select the Batch to DELETE FROM DB',
          type: 'select',
          selectOptions: val
        })
          .then((r) => {
            resolve(data[r].BatchNo)
          })
      })
    },
    delete1: function () {
      var current = this
      var gpno = this.prompt()
      gpno.then(function (r) {
        var query = 'SELECT * from GATEPASS where GPNo = ' + mysql.escape(r) + 'and period = ' + mysql.escape(current.period)
        var values = queryExecSample(query)
        values.then(function (data) {
          console.log(data)
          var data1 = current.promptb(data)
          data1.then(function (data) {
            console.log(data)
          })
        })
      })
      var query = 'Delete * from gatepass where GPNo = ' + this.gpno + ' and BatchNo = ' + this.gpbatch
      // before deleting the gatepass first select the values in the gate pass
      // using that value upadates the result in stk detl and control of the application
      // after updating(-) the value of the application inorder to stability the programmatical norms in the every financial
      // then after working on this work on the screen disingingin section
      console.log(query)
    }
  }
}
</script>
<style src="./gatepass.css">
</style>
