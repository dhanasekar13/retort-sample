var mysql = require('mysql')
function connect () {
  var mysql = require('mysql')
  var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'sample'
  })

  return con
}
// the queries are runned for sample applicaiton
function queryExecSample (query) {
  return new Promise(function (resolve, reject) {
    var connection = connect()
    connection.connect(function (err) {
      if (err) {
        alert('check the network connection')
        console.log(err)
      }
    })
    var $query = query
    console.log($query)
    connection.query($query, function (err, rows, fields) {
      if (err) {
        alert('check the network connection')
        return
      }
      resolve(rows)
    })
  })
}
function insertRecord (tablename, statement) {
  return new Promise(function (resolve, reject) {
    var connection = connect()
    connection.connect(function (err) {
      if (err) {
        alert(err)
      }
    })
    var bind = statement
    var query = 'INSERT INTO ?? set ?'
    connection.query(query, [tablename, bind], function (err, rows, fields) {
      if (err) {
        alert(err)
      }
      resolve('Records inserted successfully')
    })
  })
}
function updateRecord (tablename, value) {
  return new Promise(function (resolve, reject) {
    var connection = connect()
    connection.connect(function (err) {
      if (err) alert(err)
    })
  })
}
function deleteRecord (tablename, value) {
  return new Promise(function (resolve, reject) {
    var connection = connect()
    connection.connect(function (err) {
      if (err) {
        alert(err)
      }
    })
    var bind = value.shcd
    var bind1 = value.company
    var query = 'DELETE FROM ?? WHERE SHCD = ? AND CCode = ? '
    connection.query(query, [tablename, bind, bind1], function (err, rows, fields) {
      if (err) {
        alert(err)
      }
      resolve('Records inserted successfully')
    })
  })
}
export {
  queryExecSample,
  connect,
  mysql,
  insertRecord,
  updateRecord,
  deleteRecord
}
