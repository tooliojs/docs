const fs = require('fs')
const os = require('os').platform()
const Walk = require('../../_lib/Walk')
const Write = require('./write')

module.exports = function(options) {

    Walk(options.entry, options, (path) => {
        try {
            let splitter
            os === 'win32' ? splitter = '\\' : splitter = '/'

            const filename = path.split(splitter)[path.split(splitter).length-1]
            const markdown = fs.readFileSync(path, 'utf8')

            let new_filename = filename.split('.'); new_filename.pop()
            let resolved_filename = ''

            new_filename.forEach(name => {
                if(resolved_filename === '') resolved_filename = name + '.'
                else resolved_filename += name + '.'
            })

            resolved_filename += 'html'
            Write(options.tmp, resolved_filename, markdown)
        }
        catch(err) { console.log(err); process.exit() }
    })

    console.log('successfully create html files in tmp...')
    return 0
}