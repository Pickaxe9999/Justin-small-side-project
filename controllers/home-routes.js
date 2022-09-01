const router = require('express').Router();

//render the html handlebars homepage
router.get('/', (req, res) => {
    res.render('homepage')
})

module.exports = router;