const { Router } = require('express');
const router = new Router();

router.post('/', require('./local'));

module.exports = router;
