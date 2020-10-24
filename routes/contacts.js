
const router = require('express').Router()

const contactsController = require('../controllers/contactsController')

router.get('/', contactsController.all)

module.exports = router
