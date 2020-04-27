const Package = require('./Package')
const Merge = require('./Merge')
const defaults = require('../../package.json').toolio.docs

module.exports = function(options) {
    if(options) return Merge(defaults, options)
    if(!Package() && !Package().toolio && !Package().toolio.docs) return defaults
    return Merge(defaults, Package().toolio.docs)
}