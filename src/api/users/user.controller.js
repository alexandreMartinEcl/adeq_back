//const {signToken} = require('../../auth/auth.service');
const User = require('./user.model');

module.exports = {};

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