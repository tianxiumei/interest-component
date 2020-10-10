const rimraf = require('rimraf')

module.exports = function(dir) {
  rimraf.sync(dir)
  return Promise.resolve()
}
