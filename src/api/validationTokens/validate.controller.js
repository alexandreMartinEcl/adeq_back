const Validation = require('./validate.model');
const userCtrler = require('../users/user.controller');

module.exports = {};

module.exports.validate = (req, res) => {
    console.log("Req validation (validate()): ");
    console.log(req.query);
    Validation.findOneAndRemove({token: req.query.token},
            (err, validation) => {
        console.log("Validation searched :");
        console.log(validation);
        if (err) {
            return res.status(500).json(err);
        }

        if(!validation){
            return res.status(500).json({"status": 'ok', 'response': 'Token already used or never existed'});
        }

        if(validation.type === "account"){

            // /!\ MOCHE, mais ne fonctionne aps sans ca (histoire de scope à régler)
            const userCtrler = require('../users/user.controller');

            userCtrler.validateUser(validation.data);
            let oTemp = {'status': 'ok', 'responses': 'Account validated'};
            res.status(200).json(oTemp);
        };
    });
};

module.exports.createAuto = (validateObj) => {
    /*
    validateObj: {token : String, type: String, data: String}
    */
    const validation = new Validation(validateObj);

    validation.save((err) => {
        console.log("Validation object being saved");
        console.log(validateObj);
    });

};

