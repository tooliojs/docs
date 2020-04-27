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
    format: joi.object({
        html: joi.object({
            type: joi.string()
                .required()
        }).required(),
        pdf: joi.object({
            type: joi.string()
                .required()
        }).required()
    }).required()
})