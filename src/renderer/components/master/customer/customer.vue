<template src="./customer.html">
</template>
<script>
import { customer } from '@/components/database/table'
import { queryExecSample, mysql, insertRecord, deletesome } from '@/components/database/dbConnection'
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
      custdet1: '',
      hitted: this.dummy(),
      custdetadd: '',
      customerid: '',
      name: [],
      value: []

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
      console.log(current.custdet1)
      console.log('create function' + conforms)
      if (conforms) {
        customer.Ptype = this.ptype
        customer.DtCode = this.district
        if (this.custdet1 === '') {
          customer.PCode = this.custdet
        } else {
          customer.PCode = this.custdet1
        }
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
      var cust = customer
      var cust1 = ''
      if (this.custdet1 === '') {
        cust1 = this.custdet
      } else {
        cust1 = this.custdet1
      }
      console.log('save function')
      console.log(customer)
      console.log(cust)
      if ((cust.Ptype === this.ptype) &&
      (cust.PNAME === this.PNAME) &&
      (cust.PCode === cust1) &&
      (cust.Address1 === this.Address1) &&
      (cust.Address2 === this.Address2) &&
      (cust.Address3 === this.Address3) &&
      (cust.Address4 === this.Address4) &&
      (cust.Fax === this.Fax) &&
      (cust.Phone === this.Phone) &&
      (cust.PAN === this.PAN) &&
      (cust.ADSTNO === this.ADSTNO) &&
      (cust.DLNO === this.DLNO) &&
      (cust.AreaCode === this.AreaCode) &&
      (cust.BNAME === this.BName) &&
      (cust.TDIS === this.TDIS) &&
      (cust.TDIN === this.TDIN) &&
      (cust.TRAN === this.TRAN)) {
        alert('nothing is changed are modified')
      } else {
        if (cust.Ptype !== this.ptype) {
          this.name.push('Ptype')
          this.value.push(this.ptype)
        }
        if (cust.PCode !== cust1) {
          this.name.push('PCode')
          this.value.push(cust1)
        }
        if (cust.PNAME !== this.PNAME) {
          this.name.push('PNAME')
          this.value.push(this.PNAME)
        }
        if (cust.Address1 !== this.Address1) {
          this.name.push('Address1')
          this.value.push(this.Address1)
        }
        if (cust.Address2 !== this.Address2) {
          this.name.push('Address2')
          this.value.push(this.Address2)
        }
        if (cust.Address3 !== this.Address3) {
          this.name.push('Address3')
          this.value.push(this.Address3)
        }
        if (cust.Address4 !== this.Address4) {
          this.name.push('Address4')
          this.value.push(this.Address4)
        }
        if (cust.Fax !== this.Fax) {
          this.name.push('Fax')
          this.value.push(this.Fax)
        }
        if (cust.Phone !== this.Phone) {
          this.name.push('Phone')
          this.value.push(this.Phone)
        }
        if (cust.PAN !== this.PAN) {
          this.name.push('PAN')
          this.value.push(this.PAN)
        }
        if (cust.ADSTNO !== this.ADSTNO) {
          this.name.push('ADSTNO')
          this.value.push(this.ADSTNO)
        }
        if (cust.DLNO !== this.DLNO) {
          this.name.push('DLNO')
          this.value.push(this.DLNO)
        }
        if (cust.AreaCode !== this.AreaCode) {
          this.name.push('AreaCode')
          this.value.push(this.AreaCode)
        }
        if (cust.BNAME !== this.BName) {
          this.name.push('BNAME')
          this.value.push(this.BName)
        }
        if (cust.TDIS !== this.TDIS) {
          this.name.push('TDIS')
          this.value.push(this.TDIS)
        }
        if (cust.TDIN !== this.TDIN) {
          this.name.push('TDIN')
          this.value.push(this.TDIN)
        }
        if (cust.TRAN !== this.TRAN) {
          this.name.push('TRAN')
          this.value.push(this.TRAN)
        }
        console.log(this.name)
        console.log(this.value)
        var setting = ''
        for (var i = 0; i < this.name.length; i++) {
          var set = this.name[i] + ' = ' + mysql.escape(this.value[i])
          if (this.name[i + 1]) {
            set = set + ' , '
          } else {

          }
          setting = setting + set
        }
        var query = ' update customer SET ' + setting + ' WHERE PCode = ' + mysql.escape(this.custdet)
        queryExecSample(query).then(function () { })
        alert('Record updated successfully')
      }
    },
    delete1: function () {
      var current = this
      var vals = ''
      if (current.custdet1 === '') {
        vals = { PCode: current.custdet }
      } else {
        vals = { PCode: current.custdet1 }
      }
      deletesome('customer', vals).then(function () {
        alert('Record Deleted Successfully')
      }, function () {
        alert('sorry record is not deleted')
      })
    },
    clear: function () {
      var current = this
      current.PNAME = ''
      current.custdet1 = ''
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
          customer.Ptype = current.ptype
          customer.DtCode = current.DtCode
          customer.PCode = current.PCode[i].PCode
          customer.PNAME = current.PNAME
          customer.Address1 = current.Address1
          customer.Address2 = current.Address2
          customer.Address3 = current.Address3
          customer.Address4 = current.Address4
          customer.Fax = current.Fax
          customer.Phone = current.Phone
          customer.PAN = current.PAN
          customer.ADSTNO = current.ADSTNO
          customer.DLNO = current.DLNO
          customer.AreaCode = current.AreaCode
          customer.BNAME = current.BName
          customer.TDIS = current.TDIS
          customer.TDIN = current.TDIN
          customer.TRAN = current.TRAN
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
