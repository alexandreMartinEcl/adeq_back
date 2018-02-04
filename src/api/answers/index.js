const {Router} = require('express');
const router = new Router();

const ctrler    = require('./answer.controller');

router.put('/', ctrler.update_answers);
router.post('/', ctrler.create);

module.exports = router;