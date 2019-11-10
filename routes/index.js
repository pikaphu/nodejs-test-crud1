const router = require('express').Router();
const moment = require('moment')

router.get('/', (req, res, next) => {
    //console.log('Time: %d', Date.now())
    console.log('Time: %s', moment().format('MMMM Do YYYY, h:mm:ss a'))
    next()
})


module.exports = router;