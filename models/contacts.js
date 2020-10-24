
const schema = ['name', 'phone_number', 'address']
const contacts = [
    {
        name: 'Chen',
        phone_number: '+972 504123456',
        address: '',
    },
    {
        name: 'Jane',
        phone_number: '+1 2024561414',
        address: '1600 Pennsylvania Avenue NW Washington, D.C. 20500 U.S.',
    },
    {
        name: 'Gerry',
        phone_number: '036789789',
        address: '17 Mazeh Tel Aviv',
    }
]

const findByName = (name) => {
    // Multiple contacts with names that only differ in case isn't allowed
    return contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
}

const addContact = (contact) => {
    // Multiple contacts with the same name isn't allowed
    if (findByName(contact.name) === undefined) {
        contacts.push({name: contact.name, phone_number: contact.phone_number, address: contact.address})
        return true
    }
    else {
        return false
    }
}

exports.schema = schema
exports.contacts = contacts
exports.findByName = findByName
exports.addContact = addContact
