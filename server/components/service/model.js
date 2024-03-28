const mongoose = require('mongoose');
const serviceSchema = require('../../schema/service.schema');

const ServiceModel = mongoose.model('Service', serviceSchema);

module.exports = ServiceModel;