const mongoose = require('mongoose');

const EvalSchema = new mongoose.Schema({
    key: {
        type: String,
        unique: true,
        required: true,
    },
    eval_email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: false,
        required: true,
    },
    target_email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: false,
        required: true,
    },
    eval: {type: Number, default: 0},
    activated: {type: Boolean, default: true},
    updated: {type: Boolean, default: false}
});

module.exports = mongoose.model('Eval', EvalSchema);
