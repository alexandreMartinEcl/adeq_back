const mongoose = require('mongoose');

const EvalSchema = new mongoose.Schema({
    host_email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true,
    },
    guest_email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true,
    },
    host_eval: Number,
    guest_eval: Number
});

module.exports = mongoose.model('Eval', EvalSchema);
