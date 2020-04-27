const fs = require('fs')
const path = require('path')
const target = path.resolve('package.json')

module.exports = function() {
    let found
    if(fs.existsSync(target)) found = require(target)
    return found
}