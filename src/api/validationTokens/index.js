const {Router} = require('express');
const router = new Router();

const ctrler    = require('./validate.controller');

router.get('/', ctrler.validate);

module.exports = router;