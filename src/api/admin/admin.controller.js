const User = require('../users/user.model');
const Eval = require('../evals/eval.model');
const Question = require('../questions/quest.model');
const Answers = require('../answers/answer.model');
const Discussion = require('../discussions/discussion.model');
const Validation = require('../validationTokens/validate.model');

const { generateToken } = require('../../services/tools.service');

module.exports = {};

/*
req.body.users : [{
    email: String, firstName: String,
    lastName: String, password: String}]
*/
module.exports.createUsers = (req, res) => {
    let results = [];
    let nbInsert = req.body.users.length;
    req.body.users.forEach((reqUser) => {
        const user = new User(reqUser);
        user.validated = true;
        user.password = reqUser.password;

        user.save((err) => {
            console.log(user);
            console.log(err);
            if (err) {
                results.push(err);
                console.log(results);
//                return res.status(500).json(err);
            }
            else{
                results.push(user);
                console.log(results);
    //            res.status(201).json(user);
            }

            if(results.length == nbInsert){
                res.status(201).json(results);
            }
        });
    });
};

/*
req.body.evals : [{
    eval_email: String, target_email: String,
    key: String}]
*/
module.exports.createEvals = (req, res) => {
    let results = [];
    let nbInsert = req.body.evals.length;
    req.body.evals.forEach((reqEval) => {
        const eval = new Eval(reqEval);

        eval.save((err) => {
            console.log(eval);
            console.log(err);
            if (err) {
                results.push(err);
                console.log(results);
//                return res.status(500).json(eval);
            }
            else{
                results.push(eval);
                console.log(results);
    //            res.status(201).json(eval);
            }

            if(results.length == nbInsert){
                res.status(201).json(results);
            }
        });
    });
};

/*
req.body.questions : [{
    _id: String, title: String,
    choices: [String], type: String}]
*/
module.exports.createQuestions = (req, res) => {
    let results = [];
    let nbInsert = req.body.questions.length;
    req.body.questions.forEach((quest) => {
        const question = new Question(quest);
        question.save((err) => {
            console.log(question);
            console.log(err);
            if (err) {
                results.push(err);
//                return res.status(500).json(err);
            }
            else{
                results.push(question);
//                res.status(201).json(user);
            }

            if(results.length == nbInsert){
                res.status(201).json(results);
            }
        });
    });
};

//req.body.answers : [{_id: String, q1: String, etc.}]
module.exports.createAnswers = (req, res) => {
    let results = [];
    let nbInsert = req.body.answers.length;
    req.body.answers.forEach((reqAnsw) => {
        const answers = new Answers(reqAnsw);

        answers.save((err) => {
            console.log(answers);
            console.log(err);
            if (err) {
                results.push(err);
//                return res.status(500).json(eval);
            } else {
                results.push(answers);
    //            res.status(201).json(eval);
            }

            if (results.length == nbInsert) {
                res.status(201).json(results);
            }
        });
    });
};

/*
req.body.matches : [{
    emailOne: String, emailTwo: String,
    nameOne: String, nameTwo: String 
    roleOne: String, roleTwo: String
}]
*/
// /!\ BE CAREFUL : could not find how to set 'key' unique for Eval schema.
module.exports.createMatchs = (req, res) => {
    let results = [];
    let nbReq = req.body.matches.length * 5;
    req.body.matches.forEach((match) => {
        let token = generateToken() + generateToken() + generateToken();

        const disc = new Discussion({_id: token});

        disc.save((err) => {
            console.log("Tried to insert discussion for: " + 
            match.emailOne + " - " + match.emailTwo);

            if (err) {
                console.log("Discussion insertion failed");
                console.log(err);
                results.push(err);
            } else {
                results.push(disc);
            }

            if (results.length == nbReq) {
                res.status(201).json(results);
            }
        });

        User.update({email: match.emailOne},
            { 
                $set: {
                    room_name: token,
                    curr_discussion_id: token,
                    curr_discussion_role: match.roleOne,
                    current_match: match.nameTwo
                }
            }, 
            (err, user)=>{
                console.log("Tried update " + match.emailOne);
                if(err){
                    console.log("Failed update");
                    console.log(err);
                    results.push(err);
                }
                else{
                    results.push(user);
                }

                if(results.length == nbReq){
                    res.status(201).json(results);                
                }
        });

        User.update({email: match.emailTwo},
        {
            $set: {
                room_name: token,
                curr_discussion_id: token,
                curr_discussion_role: match.roleTwo,
                current_match: match.nameOne
            }
        },
        (err, user) => {
            console.log("Tried update " + match.emailOne);
            if (err) {
                console.log("Failed update");
                console.log(err);
                results.push(err);
            } else {
                results.push(user);
            }

            if (results.length == nbReq) {
                res.status(201).json(results);
            }
        });

        let e = new Eval({
            key: match.emailOne + "-" + match.emailTwo,
            eval_email: match.emailOne,
            target_email: match.emailTwo
        });

        let e2 = new Eval({
            key: match.emailTwo + "-" + match.emailOne,
            eval_email: match.emailTwo,
            target_email: match.emailOne
        });

        e.save((err) => {
            console.log("Tried to insert eval for: " + e.eval_email);
            if (err) {
                console.log("Eval insertion failed");
                console.log(err);
                results.push(err);
            } else {
                results.push(e);
            }

            if (results.length == nbReq) {
                res.status(201).json(results);
            }
        });

        e2.save((err) => {
            console.log("Tried to insert eval for: " + e2.eval_email);
            if (err) {
                console.log("Eval insertion failed");
                console.log(err);
                results.push(err);
            } else {
                results.push(e2);
            }

            if (results.length == nbReq) {
                res.status(201).json(results);
            }
        });

    });
};

/*
req.query : {anyField: [fieldType]}
*/
module.exports.getUsers = (req, res) => {
    User.find(req.query,
        (err, users) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(users);
    });
};

/*
req.query : {anyField: [fieldType]}
*/
module.exports.getEvals = (req, res) => {
    Eval.find(req.query,
        (err, evals) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(evals);
    });
};

/*
req.query : {anyField: [fieldType]}
*/
module.exports.getQuestions = (req, res) => {
    Question.find(req.query,
        (err, questions) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(questions);
    });
};

/*
req.query : {anyField: [fieldType]}
*/
module.exports.getAnswers = (req, res) => {
    Answers.find(req.query,
        (err, answers) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(answers);
    });
};

/*
req.query : {anyField: [fieldType]}
*/
module.exports.getValidationTokens = (req, res) => {
    Validation.find(req.query,
        (err, tokens) => {
        if (err) {
            return res.status(500).json(err);
        }
        res.status(201).json(tokens);
    });
};

/*
req.body : {email: String, to_update: {fields: fieldTypes}}
*/
module.exports.updateUser = (req, res) => {
    console.log(req.body)
    User.update({email: req.body.email},
        {
            $set: req.body.to_update
        }, (err, info) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.status(200).json(info);
    });
};

/*
req.body : {key: String, to_update: {fields: fieldTypes}}
*/
module.exports.updateEval = (req, res) => {
    console.log(req.body)
    Eval.update({key: req.body.key},
        {
            $set: req.body.to_update
        }, (err, info) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(info);
    });
};

/*
req.body : {id: String, to_update: {fields: fieldTypes}}
*/
module.exports.updateQuestion = (req, res) => {
    console.log(req.body);
    Question.update({_id: req.body.id},
        {
            $set: req.body.to_update
        }, (err, info) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(info);
    });
};

/*
req.body : {email: String, to_update: {fields: fieldTypes}}
*/
module.exports.updateAnswers = (req, res) => {
    console.log(req.body)
    Answers.update({_id: req.body.email},
        {
            $set: req.body.to_update
        }, (err, info) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(info);
    });
};

/*
req.body : {emails: [String]}
*/
module.exports.delUsers = (req, res) => {
    console.log(req.body)
    User.remove({email: req.body.emails},
        (err) => {
            if (err) {
                return res.status(500).json(err);
            }

            res.status(200).json(err);
    });
};

/*
req.body : {keys: [String]}
*/
module.exports.delEvals = (req, res) => {
    console.log(req.body)
    Eval.remove({key: req.body.keys},
        (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(err);
    });
};

/*
req.body : {ids: [String]}
*/
module.exports.delDiscussions = (req, res) => {
    console.log(req.body)
    Answers.remove({_id: req.body.ids},
        (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(err);
    });
};

/*
req.body : {ids: [String]}
*/
module.exports.delQuestions = (req, res) => {
    console.log(req.body);
    Question.remove({_id: req.body.ids},
        (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(err);
    });
};

/*
req.body : {emails: [String]}
*/
module.exports.delAnswers = (req, res) => {
    console.log(req.body)
    Answers.remove({_id: req.body.emails},
        (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(err);
    });
};

/*
req.body : {tokens: [String]}
*/
module.exports.delValidationTokens = (req, res) => {
    console.log(req.body)
    Validation.remove({_id: req.body.tokens},
        (err) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(err);
    });
};