const mongoose = require('mongoose');
const userSchema = require('../../schema/user.schema');

const UsersModel = mongoose.model('Users', userSchema);

module.exports = UsersModel;