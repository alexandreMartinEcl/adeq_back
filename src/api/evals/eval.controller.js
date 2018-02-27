//const {signToken} = require('../../auth/auth.service');
const Eval = require('./eval.model');

module.exports = {};

module.exports.update = (req, res) => {
    console.log("Try eval update");
    
    Eval.update(
        {eval_mail: req.user.email, activated: true},
        { $set: {eval: req.body.eval, updated: true}},
        (err, answer) => {
            console.log("ff");
            if (err) {
                return res.status(500).json(err);
            }
            let oTemp = {'status': 'ok'};
            res.status(200).json(oTemp);
        });
};

