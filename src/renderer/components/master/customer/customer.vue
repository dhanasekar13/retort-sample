<template src="./customer.html">
</template>
<script>
import { customer } from '@/components/database/table'
import { queryExecSample, mysql, insertRecord } from '@/components/database/dbConnection'
export default {
  data () {
    return {
      customercode: '',
      ptype: '',
      state: '',
      DtCode: '',
      PCode: '',
      PNAME: '',
      Address1: '',
      Address2: '',
      Address3: '',
      Address4: '',
      Fax: '',
      Phone: '',
      PAN: '',
      ADSTNO: '',
      DLNO: '',
      AreaCode: '',
      BName: '',
      TDIS: '',
      TDIN: '',
      TRAN: '',
      company: '',
      states: '',
      district: '',
      custdet: '',
      hitted: this.dummy(),
      custdetadd: '',
      customerid: ''

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
  watch: {
    'states': 'districtData',
    'district': 'customerData',
    'custdet': 'customerdetail'
  },
  methods: {
    dummy: function () {

    },
    hit: function () {
      console.log('hiited function')
      this.hitted()
      this.states = ''
      this.district = ''
      this.custdet = ''
    },
    change: function (data) {
      this.hitted = data
    },
    creat: function () {
      var current = this
      var conforms = confirm('Are You sure want to create')
      console.log(current.custdet)
      console.log('create function' + conforms)
      if (conforms) {
        customer.Ptype = this.ptype
        customer.DtCode = this.district
        customer.PCode = this.custdet
        customer.OldCODE = ''
        customer.PNAME = this.PNAME
        customer.Address1 = this.Address1
        customer.Address2 = this.Address2
        customer.Address3 = this.Address3
        customer.Address4 = this.Address4
        customer.DEST = ''
        customer.PINC = ''
        customer.Phone = this.Phone
        customer.Fax = this.Fax
        customer.Email = ''
        customer.AreaCode = this.AreaCode
        customer.Flag = ''
        customer.PAN = this.PAN
        customer.STNO = ''
        customer.ADSTNO = this.ADSTNO
        customer.DLNO = this.DLNO
        customer.BNAME = this.BName
        customer.Bad2 = ''
        customer.Bad3 = ''
        customer.Bad4 = ''
        customer.TDIS = this.TDIS
        customer.TDIN = this.TDIN
        customer.TRAN = this.TRAN
        var tablename = 'customer'
        insertRecord(tablename, customer).then(function () {
          alert('Inserted Successfully')
        }, function () {
          alert('sorry record is not inserted  try again')
        })
      }
    },
    save: function () {
      console.log('save function')
    },
    delete1: function () {
      console.log('Delete function')
    },
    clear: function () {
      var current = this
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
      current.TDIN = ''
      current.TRAN = ''
    },
    customerdetail: function (data) {
      var current = this
      current.clear()
      for (var i = 0; i < current.PCode.length; i++) {
        if (current.PCode[i].PCode === data) {
          current.PNAME = current.PCode[i].PNAME
          current.Address1 = current.PCode[i].Address1
          current.Address2 = current.PCode[i].Address2
          current.Address3 = current.PCode[i].Address3
          current.Address4 = current.PCode[i].Address4
          current.Fax = current.PCode[i].Fax
          current.Phone = current.PCode[i].Phone
          current.PAN = current.PCode[i].PAN
          current.ADSTNO = current.PCode[i].ADSTNO
          current.DLNO = current.PCode[i].DLNO
          current.AreaCode = current.PCode[i].AreaCode
          current.BName = current.PCode[i].BName
          current.TDIS = current.PCode[i].TDIS
          current.TDIN = current.PCode[i].TDIN
          current.TRAN = current.PCode[i].TRAN
        }
      }
    },
    districtData: function (data) {
      var current = this
      current.clear()
      var code = data + '%'
      var query = 'SELECT * FROM `districtmaster` WHERE `DtCode` LIKE ' + mysql.escape(code)
      console.log(query)
      var value = queryExecSample(query)
      value.then(function (data) {
        if (data.length > 0) {
          console.log(data)
          current.DtCode = data
        }
      })
    },
    customerData: function (data) {
      var current = this
      current.clear()
      var query = 'SELECT * FROM `customer` WHERE `DtCode`=' + mysql.escape(data)
      console.log(query)
      var value = queryExecSample(query)
      value.then(function (data) {
        if (data.length > 0) {
          console.log(data)
          current.PCode = data
          var length = data.length
          console.log(length - 1)
          var values = data[length - 1]['PCode']
          var no = parseInt(values.slice(-3)) + 1
          var cut = values.slice(0, -3)
          console.log(cut)
          if (no < 10) {
            no = '00' + no
          } else if (no < 100) {
            no = '0' + no
          }
          console.log(no)
          console.log(cut + no)
          current.custdetadd = cut + no
        }
      })
    }
  }
}
</script>
<style src="./customer.css">

</style>
