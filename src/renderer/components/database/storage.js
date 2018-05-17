const storage = require('electron-json-storage')

function set (head, data) {
  storage.set(head, data, function (error) {
    if (error) throw error
  })
}
function get (head, data) {
  storage.get(head, function (error, data) {
    if (error) throw error
    return data
  })
}

module.exports = {
  set: set,
  get: get
}
