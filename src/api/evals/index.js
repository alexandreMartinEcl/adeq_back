const {Router} = require('express');
const router = new Router();

const ctrler    = require('./eval.controller');

router.put('/', ctrler.update);

module.exports = router;
