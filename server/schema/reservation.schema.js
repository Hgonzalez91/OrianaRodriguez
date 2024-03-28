const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    fullname: String,
    phoneNumber: String,
    // service: {
    //     type: mongoose.ObjectId,
    //     ref: 'services'
    // },
    resevationDate: Date,
})

module.exports = reservationSchema;