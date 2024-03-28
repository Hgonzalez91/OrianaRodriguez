const { Router } = require('express')
const {addService, serviceList, findServiceByName} = require('./controller')

const routerService = Router()

routerService.post('/', async (req, res) =>{
    console.log(req.body)
   const serviceCreated = await addService(req.body);
   if (serviceCreated){
    res.status(201).json(serviceCreated)
   }else{
    res.status(500).json({
        "error": "Service not created"
    })
   }
})

routerService.get('/', async (req, res) =>{
    const service = req.query.service;

    if(!service){
        const getAllService = await serviceList();
        res.status(201).json(getAllService)
    }else {
        const getOne = await findServiceByName(service);
        res.json(getOne)
    }
});

module.exports = routerService;