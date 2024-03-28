const { Router } = require('express')
const {addReservation, reservationList, findReservationByName} = require('./controller')

const routerReserv = Router()

routerReserv.post('/', async (req, res) =>{
    console.log(req.body)
   const reservationCreated = await addReservation(req.body);
   if (reservationCreated){
    res.status(201).json(reservationCreated)
   }else{
    res.status(500).json({
        "error": "Reservation not created"
    })
   }
})

routerReserv.get('/', async (req, res) =>{
    const fullname = req.query.fullname;
    if(!fullname){
        const getAllReservations = await reservationList();
        res.status(201).json(getAllReservations)
    }else {
        const getOne = await findReservationByName(fullname);
        res.json(getOne)
    }
});

module.exports = routerReserv;