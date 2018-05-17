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
        console.log(err.code)
        console.log(err.fatal)
      }
    })
    var $query = query
    console.log($query)
    connection.query($query, function (err, rows, fields) {
      if (err) {
        console.log('An error ocurred performing the query.')
        console.log(err)
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
