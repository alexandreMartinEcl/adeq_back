const User = require('../users/user.model');
const Eval = require('../evals/eval.model');

module.exports = {};

module.exports.create_user = (req, res) => {
    const user = new User(req.body);
    user.password = req.body.password;
    user.save((err) => {
        console.log("Reqbody");
        console.log(req.params);
        if (err) {
            return res.status(500).json(err);
        }
        //socketServer.emit('INVALIDATE_CHANNEL_LIST');
        res.status(201).json(user);//.json({token: signToken(user.profile)});
    });

};

module.exports.create_eval = (req, res) => {
    const eval = new Eval(req.body);
    eval.save((err) => {
        console.log("Reqbody");
        console.log(req.params);
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(eval);
    });
};
