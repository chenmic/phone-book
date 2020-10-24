
const router = require('express').Router()

const basic = require('./basic')
const contacts = require('./contacts')

router.use('/whos-there', basic)
router.use('/contacts', contacts)

module.exports = router
