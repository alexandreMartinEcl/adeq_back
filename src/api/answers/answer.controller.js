const Answers = require('./answer.model');

module.exports = {};

module.exports.update_answers = (req, res) => {
    Answers.findOneAndUpdate({_id: req.user.email},
        {
            $set: req.body.answers,
        },
        {
            upsert: true,
        }, (err, answer) => {
        if (err) {
	    console.log(err);
            return res.status(500).json(err);
        }
//        return "{'status': 'ok', 'respones': 'coming'}";
        let oTemp = {'status': 'ok', 'responses': 'coming'};
        console.log("Update done");
	console.log(answer);
        res.status(200).json(oTemp);//answer);
    });
};

module.exports.create = (req, res) => {
    const answers = new Answers(req.body);

    answers.save((err) => {
        console.log("Reqbody");
        console.log(req.params);
        if (err) {
            return res.status(500).json(err);
        }
        //socketServer.emit('INVALIDATE_CHANNEL_LIST');
        res.status(201).json(answers);
    });

};

