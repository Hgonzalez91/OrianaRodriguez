const mongoose = require('mongoose');
const reservationSchema = require('../../schema/reservation.schema');

const ReservationModel = mongoose.model('Reservation', reservationSchema);

module.exports = ReservationModel;