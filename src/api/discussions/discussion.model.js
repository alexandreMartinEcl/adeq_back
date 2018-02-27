const mongoose = require('mongoose');

const Message = {
    count: {type: Number, required: false},
    content: {type: String, required: true},
    time: {type: Date, required: true},
    type: {type: String, required: true}
}

const DiscussionSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    messages: {type: [ Message ], default: []}
});

module.exports = mongoose.model('Discussion', DiscussionSchema);
