const fs = require('fs')
const path = require('path')

function walk(dir, options, callback) {
    if(fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach( f => {
            if(f.endsWith('.md') || f.endsWith('.html')) {
                let fullpath = path.resolve(path.join(dir, f))
                fs.statSync(fullpath).isDirectory() ?
                walk(fullpath, callback):
                callback(fullpath)
            }
        })
    } else { console.log(`error: can't find any markdown files in "${options.entry}"`); process.exit() }
}

module.exports = walk