//const {signToken} = require('../../auth/auth.service');
const Eval = require('./eval.model');

module.exports = {};

module.exports.update = (req, res) => {
    console.log("Try eval update");
    
    if(req.user.curr_discussion_role == "host"){
        Eval.update(
            {host_email: req.user.email},
            { $set: {host_eval: req.body.eval}},
            (err, answer) => {
                console.log("ff");
                if (err) {
                    return res.status(500).json(err);
                }
                let oTemp = {'status': 'ok'};
                res.status(200).json(oTemp);
            });
    }
    else{
        Eval.update(
            {guest_email: req.user.email},
            { $set: {guest_eval: Number(req.body.eval)}},
            (err, answer) => {
                console.log("gg");
                if (err) {
                    return res.status(500).json(err);
                }
                let oTemp = {'status': 'ok'};
                res.status(200).json(oTemp);
            }
        );
    }
};

