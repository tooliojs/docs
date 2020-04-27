const joi = require('@hapi/joi')

module.exports = joi.object({
    mode: joi.string()
        .required(),
    entry: joi.string()
        .required(),
    output: joi.string()
        .required(),
    tmp: joi.string()
        .required(),
    theme: joi.string()
        .required()
})