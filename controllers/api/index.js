const router = require('express').Router();

const imageRoutes = require('./imageRoutes')

//connect to image routes api
router.use('/images', imageRoutes);

module.exports = router;