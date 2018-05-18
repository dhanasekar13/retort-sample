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
export {
  queryExecSample,
  connect,
  mysql
}
