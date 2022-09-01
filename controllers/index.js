const router = require('express').Router();

//establish url and api routes
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api')

//establish routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;