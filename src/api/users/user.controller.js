//const {signToken} = require('../../auth/auth.service');
const User = require('./user.model');
const valCtrler = require('../validationTokens/validate.controller');

const emailService = require('../../services/email.service');
const { generateToken } = require('../../services/tools.service');

module.exports = {};

module.exports.create_profile = (req, res) => {
    console.log(req.body)
    const user = new User(req.body);
    user.password = req.body.password;

    User.find({email: req.body.email}, (err, users) => {
        console.log(users);
        if (err) {
            return res.status(500).json(err);
        }

        if(users.length > 0){
            let oTemp = {'status': 'failed', 'responses': 'Email already used'};
            res.status(200).json(oTemp);
            return;
        }

        let token = generateToken();

        console.log("Trying send email");
        emailService.checkAccountEmail(req.body.email, token)
            .then((mailRes) => {
                console.log("Tried sending email");
                console.log(mailRes);
                if(mailRes.success){
                    console.log("Trying save user");
                    console.log(user);

                    let validateObj = {'token': token, 'type': 'account', 'data': req.body.email}
                    valCtrler.createAuto(validateObj);

                    user.save((err) => {
                        // /!\ à cause du scope, ne va jamais trouver res defined :/
                        if (err) {
                            console.log(err);
                            return res.status(500).json(err);
                        }
                
                        res.status(201).json({'status': 'ok'});
                    });            
                }
                else{
                    console.log("Could not send email");
                    console.log(mailRes.error);
                    res.status(201).json({'status': 'failed', 'responses': mailRes.error})                    
                }
            });
        
    });
};

module.exports.validateUser = (email) => {
    // /!\ callback returns true always
    console.log("Validating an account: " + email);
    User.update({email: email},
        {
            $set: {validated: true}
        }, (err, user) => {
        return true;
    });
}

module.exports.update_details = (req, res) => {
    console.log(req.body.to_update)
    User.update({email: req.user.email},
        {
            $set: req.body.to_update
        }, (err, user) => {
        if (err) {
            return res.status(500).json(err);
        }
//        return "{'status': 'ok', 'respones': 'coming'}";
        let oTemp = {'status': 'ok', 'responses': 'coming'};
        res.status(200).json(oTemp);//answer);
    });
};

module.exports.update_password = (req, res) => {
    console.log(req.body)

    User.findOne({email: req.user.email}, (err, user) => {
        if (err) {
            return res.status(500).json(err);
        }

        if(!user.authenticate(req.body.password)){
            console.log('erro pass');
            return res.status(500).json(
                {
                    status: 400,
                    code: 'INCORRECT_PASSWORD',
                    message: 'Le mot de passe est incorrect.'
                });
        }

        user.password = req.body.new_password;

        user.save((err)=>{
            if (err) {
                return res.status(500).json(err);
            }
            res.status(201).json(user);
        })
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