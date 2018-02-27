const mongoose = require('mongoose');

const QuestSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    title: {type: String, required: true},
    choices: {type: [ String ], required: true},
    type: {type: String, required: true}
});

module.exports = mongoose.model('Question', QuestSchema);
