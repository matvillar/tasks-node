const router = require('express').Router();

router.use('/', require('./swagger'));
router.use('/', require('./tasks-route'));

module.exports = router;
