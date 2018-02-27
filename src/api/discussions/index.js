const {Router} = require('express');
const router = new Router();

const ctrler    = require('./discussion.controller');

router.post('/message/', ctrler.add_msg);
router.get('/', ctrler.find_discussion);

module.exports = router;
