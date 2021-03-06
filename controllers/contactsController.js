
const _ = require('lodash')

const contacts = require('../models/contacts')

const contactsArr = contacts.contacts
const findByName = contacts.findByName
const schema = contacts.schema
const addContact = contacts.addContact


exports.all = function (req, res) {
    res.send(contactsArr)
}

exports.find = function (req, res) {
    let contact = findByName(req.params.name)
    if (contact === undefined) {
        res.status(404)
        res.send(`No contact named ${req.params.name}.`);
    }
    else {
        res.send(contact)
    }
}

exports.add = function (req, res) {
    let contact = req.body

    // Contact must contain all relevant schema fields
    if (!_.every(schema, (field) => _.has(contact, field))) {
        res.status(400)
        res.send('Missing contact fields.')
    }
    else {
        // Contact can't be added if it's already exists
        let success = addContact(contact)
        if (!success) {
            res.status(409)
            res.send(`Contact ${contact.name} already exists.`)
        }
        else {
            res.send(`Contact ${contact.name} added successfully.`)
        }
    }
}
