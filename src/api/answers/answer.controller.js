const Answer = require('./answer.model');

module.exports = {};

module.exports.update_answers = (req, res) => {
    Answer.update({_id: req.user.pseudo},
        {
            $set: req.body.answers
        }, (err, answer) => {
        if (err) {
            return res.status(500).json(err);
        }
//        return "{'status': 'ok', 'respones': 'coming'}";
        let oTemp = {'status': 'ok', 'responses': 'coming'};
        res.status(200).json(oTemp);//answer);
    });
};

module.exports.create = (req, res) => {
    const answer = new Answer(req.body);

    answer.save((err) => {
        console.log("Reqbody");
        console.log(req.params);
        if (err) {
            return res.status(500).json(err);
        }
        //socketServer.emit('INVALIDATE_CHANNEL_LIST');
        res.status(201).json(answer)
    });

};
