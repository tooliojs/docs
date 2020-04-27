const fs = require('fs')
const path = require('path')
const Mark = require('marked')

Mark.setOptions({
    headerIds: false
})

module.exports = function(dest, filename, markdown) {
    if(markdown) {
        if(fs.existsSync(path.resolve(dest))) fs.writeFileSync(path.resolve(dest, filename), Mark(markdown), { mode: 0o755 })
        else {
            fs.mkdirSync(path.resolve(dest))
            fs.writeFileSync(path.resolve(dest, filename), Mark(markdown), { mode: 0o755 })
        }
    } 
}