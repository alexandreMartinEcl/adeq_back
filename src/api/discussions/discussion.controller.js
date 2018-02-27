const Discussion = require('./discussion.model');
const socketServer = require('../../config/sockets');

module.exports = {};

module.exports.add_msg = (req, res) => {
    Discussion.update({_id: req.user.curr_discussion_id},
        {
            $push: {messages: {$each: req.body.messages}}
        }, (err, answer) => {
        if (err) {
            return res.status(500).json(err);
        }
        let oTemp = {'status': 'ok', 'responses': 'coming'};
        socketServer.emit_room(req.user.room_name, 'message', req.body.messages);
        res.status(200).json(oTemp);
    });
};

module.exports.find_discussion = (req, res) => {
    console.log(`Looking for discussion with id: ${req.user.curr_discussion_id}}`)
    Discussion.findById(req.user.curr_discussion_id,
        (err, discussion) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(discussion);
    });
};