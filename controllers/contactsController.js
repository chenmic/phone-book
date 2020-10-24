
const contacts = require('../models/contacts')

const contactsArr = contacts.contacts


exports.all = function (req, res) {
    res.send(JSON.stringify(contactsArr))
}

