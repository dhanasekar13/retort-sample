<template src="./fsm.html">
</template>

<script>
import { fsmpsr } from '@/components/database/table'
import { queryExecSample, mysql, insertRecord } from '@/components/database/dbConnection'
export default {
  data () {
    return {
      field: '',
      PCode: [],
      custdet1: '',
      name: '',
      address1: '',
      address2: '',
      address3: '',
      trans: '',
      phone: '',
      dest: '',
      join: '',
      state: '',
      status: '',
      dtcode: '',
      det: '',
      st1: '',
      hitted: this.dummy(),
      company: '',
      fcode: '',
      dt1: ''
    }
  },
  methods: {
    districtlist: function (data) {
      console.log(data)
    },
    creat: function () {
      var current = this
      var conforms = confirm('Are You sure want to create')
      console.log(current.det)
      console.log('create function' + conforms)
      if (conforms) {
        fsmpsr.CCode = this.company
        fsmpsr.Name = this.name
        fsmpsr.Code = this.fcode
        fsmpsr.Address1 = this.address1
        fsmpsr.Address2 = this.address2
        fsmpsr.Address3 = this.address3
        fsmpsr.Phone = this.phone
        fsmpsr.DOJ = this.join
        fsmpsr.Desig = this.dest
        fsmpsr.StCode = this.st1
        fsmpsr.DtCode = this.dt1
        fsmpsr.RegnCode = ''
        fsmpsr.Fsm = ''
        fsmpsr.Status = this.status
        fsmpsr.trans = this.trans
        fsmpsr.desti = this.dest
        var tablename = 'fsmpsr'
        var holdobj = fsmpsr
        console.log(holdobj)
        insertRecord(tablename, fsmpsr).then(function () {
          alert('inserted successfully')
        }, function () {
          alert(' Sorrry Record Is Not Inserted')
        })
      }
    },
    save: function () {
      console.log('this is save function')
    },
    delete1: function () {
      console.log('this is delete function of the applicatyion')
    },
    change: function (data) {
      this.hitted = data
    },
    dummy: function () {

    },
    hit: function () {
      console.log('hitted the function')
      this.hitted()
    },
    statedetails: function (data) {
      var current = this
      var code = data + '%'
      var query = 'SELECT * FROM `districtmaster` WHERE `DtCode` LIKE ' + mysql.escape(code)
      console.log(query)
      var value = queryExecSample(query)
      value.then(function (data1) {
        if (data1.length > 0) {
          console.log(data1)
          current.dtcode = data1
          current.st1 = data
        }
      })
    },
    details: function (data) {
      var current = this
      for (var i = 0; i < current.PCode.length; i++) {
        if (current.PCode[i].Code === data) {
          console.log(current.PCode[i])
          current.dtcode = current.PCode[i].DtCode
          current.status = current.PCode[i].Status
          current.state = current.PCode[i].StCode
          current.fcode = data
          current.join = current.PCode[i].DOJ
          current.dest = current.PCode[i].desti
          current.phone = current.PCode[i].Phone
          current.trans = current.PCode[i].trans
          current.address3 = current.PCode[i].Address3
          current.address2 = current.PCode[i].Address2
          current.address1 = current.PCode[i].Address1
          current.name = current.PCode[i].Name
        } else {
          current.fcode = data
        }
      }
    },
    clear: function () {
      var current = this
      current.custdet1 = ''
      current.det = ''
      current.ptype = ''
      current.states = ''
      current.district = ''
      current.custdet1 = ''
      current.PNAME = ''
      current.Address1 = ''
      current.Address2 = ''
      current.Address3 = ''
      current.Address4 = ''
      current.Fax = ''
      current.Phone = ''
      current.PAN = ''
      current.ADSTNO = ''
      current.DLNO = ''
      current.AreaCode = ''
      current.BName = ''
      current.TDIS = ''
      current.TRAN = ''
    },
    fieldData: function () {
      var current = this
      console.log('hey touching ' + this.field)
      var likes = this.field + '%'
      var query = 'SELECT * FROM `fsmpsr` WHERE `Code` LIKE ' + mysql.escape(likes)
      console.log(query)
      var value = queryExecSample(query)
      value.then(function (data) {
        if (data.length > 0) {
          current.PCode = data
          console.log(current.PCode)
          var length = data.length
          var values = data[length - 1]['Code']
          var no = current.PCode.length + 1
          var cut = values.slice(0, -2)
          var vals = cut + no
          current.custdet1 = vals
        }
      })
    }
  },
  watch: {
    'field': 'fieldData',
    'det': 'details',
    'st1': 'statedetails',
    'dt1': 'districtlist'
  },
  beforeMount () {
    var current = this
    var query = 'SELECT * from statemaster'
    var value = queryExecSample(query)
    value.then(function (data) {
      if (data.length > 0) {
        console.log(data)
        current.state = data
      }
    })
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
  }
}
</script>
<style src="./fsm.css">
</style>
