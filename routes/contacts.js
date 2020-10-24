
const router = require('express').Router()

const contactsController = require('../controllers/contactsController')

router.get('/', contactsController.all)
router.get('/find/:name', contactsController.find)
router.post('/add/:contact', contactsController.add)

module.exports = router
