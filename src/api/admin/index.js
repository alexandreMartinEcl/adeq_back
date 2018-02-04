const {Router} = require('express');
const router = new Router();

const ctrler    = require('./admin.controller');

router.post('/user', ctrler.create_user);
router.post('/eval', ctrler.create_eval);
module.exports = router;
