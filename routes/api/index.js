const router = require('express').Router();

router.use('/user', require('./user_routers'));
// router.use('/thoughts', require('./thoughts'));
// router.use('/reactions', require('./reactions'));

module.exports = router;