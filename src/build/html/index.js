const fs = require('fs')
const os = require('os').platform()
const Write = require('./write')
const Walk = require('../../_lib/Walk')
const Package = require('../../_lib/Package')()

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

    let html_paths = []
    let case_1 = `@toolio/${options.theme}-theme`
    let case_2 = `${options.theme}-theme`

    Walk(options.tmp, options, (path) => { html_paths.push(path) })

    if(Package.devDependencies) {
        for(const dep in Package.devDependencies) {
            if(dep === case_1 || dep === case_2) {
                const ThemeBuilder = require(dep)
                return ThemeBuilder(options , html_paths)
            }
        }
    }
    else if(Package.dependencies) {
        for(const dep in Package.dependencies) {
            if(dep === case_1 || dep === case_2) {
                const ThemeBuilder = require(dep)
                return ThemeBuilder(options , html_paths)
            }
        }
    }

    try {
        let LocalThemeBuilder = require(require('path').resolve(options.theme))
        return LocalThemeBuilder(options , html_paths)
    } 
    catch (error) {
        console.log(new Error(error))
        process.exit()
    }
}