const {Router} = require('express');
const router = new Router();

const ctrler    = require('./admin.controller');

router.post('/users', ctrler.createUsers);
router.post('/evals', ctrler.createEvals);
router.post('/questions', ctrler.createQuestions);
router.post('/match', ctrler.createMatchs);
router.post('/answers', ctrler.createAnswers);

router.get('/users', ctrler.getUsers);
router.get('/evals', ctrler.getEvals);
router.get('/questions', ctrler.getQuestions);
router.get('/answers', ctrler.getAnswers);

router.put('/users', ctrler.updateUser);
router.put('/evals', ctrler.updateEval);
router.put('/questions', ctrler.updateQuestion);
router.put('/answers', ctrler.updateAnswers);

module.exports = router;
