
const router = require('express').Router()

const basicController = require('../controllers/basicController')

router.get('/whos-there', basicController.basic_reply)

module.exports = router
