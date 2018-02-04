const {Router} = require('express');
const router = new Router();

const ctrler    = require('./quest.controller');

router.get('/', ctrler.findRand);
router.post('/', ctrler.create);

module.exports = router;