const mongoose = require('mongoose');

const validationSchema = new mongoose.Schema({
    token: {type: String, required: true},
    type: {type: String, required: true},
    data: {type: String, required: true},
    dateCreation: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Validation', validationSchema);
