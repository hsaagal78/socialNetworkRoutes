const router = require('express').Router();

router.use('/user', require('./user_routers'));
router.use('/thoughts', require('./thoughts_routers'));
router.use('/reactions', require('./reactions_routers'));

module.exports = router;