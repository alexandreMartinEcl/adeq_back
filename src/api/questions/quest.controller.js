const Question = require('./quest.model');
const utils = require('../../utils');
const config = require('../../config');
//const socketServer = require('../../config/sockets');

module.exports = {};

module.exports.findRand = (req, res) => {
    let ids = utils.get_random_elmts(
        config.REQ_NB_QUESTIONS, 1, config.NB_QUESTIONS);

    ids = ids.map(x => "q" + x)
    Question.find({_id: ids}, (err, questions) => {
        console.log(questions);
        if (err) {
            return res.status(500).json(err);
        }
        res.status(200).json(questions);
    });
};

module.exports.create = (req, res) => {
    const question = new Question(req.body);

    question.save((err) => {
        console.log("Reqbody");
        console.log(req.params);
        if (err) {
            return res.status(500).json(err);
        }
        //socketServer.emit('INVALIDATE_CHANNEL_LIST');
        res.status(201).json(question)
    });

};

/*

function init_base(){
    let i=1;
    for(i=1; i<=50 ;i++){
        let q = {"title": "Question " + i + "?",
            "_id": "q" + i,
            "type": "classique",
            "choices":["Oui", "Non"]};
        let question = new Question(q);
        question.save((err)=>{return true;});
    }

}
*/