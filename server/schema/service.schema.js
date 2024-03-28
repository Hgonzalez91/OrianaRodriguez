const {Schema} = require('mongoose');

const serviceSchema = new Schema({
    service : String
})

module.exports = serviceSchema;