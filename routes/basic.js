
const router = require('express').Router()

const basicController = require('../controllers/basicController')

router.get('/', basicController.basicReply)

module.exports = router
