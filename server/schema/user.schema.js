const {Schema} = require('mongoose');

const userSchema = new Schema({
    email: String,
    role: String,
    password: String
})

module.exports = userSchema;