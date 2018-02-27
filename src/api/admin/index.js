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
router.get('/validation_tokens', ctrler.getValidationTokens);

router.put('/users', ctrler.updateUser);
router.put('/evals', ctrler.updateEval);
router.put('/questions', ctrler.updateQuestion);
router.put('/answers', ctrler.updateAnswers);

router.delete('/users', ctrler.delUsers);
router.delete('/evals', ctrler.delEvals);
router.delete('/discussions', ctrler.delDiscussions);
router.delete('/questions', ctrler.delQuestions);
router.delete('/answers', ctrler.delAnswers);
router.delete('/validation_tokens', ctrler.delValidationTokens);

module.exports = router;
