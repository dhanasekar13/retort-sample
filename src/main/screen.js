const os = require('os')
const path = require('path')

function pathfolder1 () {
  const pdfpath = path.join(os.tmpdir(), 'some.pdf')
  return pdfpath
}

module.exports = {
  pathfolder1: pathfolder1
}
