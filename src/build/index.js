const Options = require('../_lib/Options')
const Schema = require('../schema')

const HTML = require('./html')

module.exports = function(format='html', options=null) {
    const { error, value } = Schema.validate(Options(options))
    if(error) { console.log(`error: ${error.details[0].message}`); process.exit() }
    switch(format) {
        case 'html':
            return HTML(value)
        case 'pdf':
            console.log('pdf builder coming soon...')
            process.exit()
        default:
            console.log(`error: unrecognized build format "${format}" - expected 'html|pdf'`)
            process.exit()
    }
}