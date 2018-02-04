const {Router} = require('express');
const router = new Router();

const ctrler    = require('./user.controller');

router.put('/details', ctrler.update_details)
router.put('/password', ctrler.update_password)

module.exports = router;