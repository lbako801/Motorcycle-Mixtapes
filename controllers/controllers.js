const router = require('express').Router();

// const apiRoutes = require('./api');
const viewroutes = require('./viewroutes');

router.use('/', viewroutes);
// router.use('/api', apiRoutes);

module.exports = router;