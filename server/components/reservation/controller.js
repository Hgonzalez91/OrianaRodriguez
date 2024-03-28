const ReservationModel = require('./model')

async function addReservation (reservation){
    if (Object.entries(reservation).length === 0) {
        console.log('Reservation cannot be empty');
        reject('There is no reservation')
    }
    
    const newReservation = await ReservationModel.create(reservation)
    return newReservation
}

async function reservationList(){
    const reservation = await ReservationModel.find();
    console.log(reservation);
    return reservation;
}

async function findReservationByName(fullname){
    const nameOfReservation = await ReservationModel.findOne({fullname})
    return nameOfReservation
}

// async function findReservationByName(service){
//     const nameOfReservation = await ReservationModel.findOne({service}).populate('services')
//     return nameOfReservation
// }

module.exports = {
    addReservation,
    reservationList,
    findReservationByName
};