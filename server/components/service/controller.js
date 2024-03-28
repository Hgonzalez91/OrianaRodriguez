const ServiceModel = require('./model')

async function addService (service){
    if (Object.entries(service).length === 0) {
        console.log('Service cannot be empty');
        reject('There is no Service')
    }
    
    const newService = await ServiceModel.create(service)
    return newService
}

async function serviceList(){
    const service = await ServiceModel.find();
    console.log(service);
    return service;
}

async function findServiceByName(service){
    const nameOfService = await ServiceModel.findOne({service})
    return nameOfService
}

module.exports = {
    addService,
    serviceList,
    findServiceByName
};