
const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../app')
const contacts = require('../models/contacts').contacts

chai.use(chaiHttp)
chai.should()

describe('Contacts', () => {
    describe('GET', () => {
        it('should get the 3 initial contacts', (done) => {
            chai.request(app)
                .get('/contacts')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.text.should.equal(JSON.stringify(contacts))
                    done()
                })
        })
        it('should get the contact named Chen', (done) => {
            chai.request(app)
                .get('/contacts/find/Chen')
                .end((err, res) => {

                    const contact = {
                        name: 'Chen',
                        phone_number: '+972 504123456',
                        address: '',
                    }

                    res.should.have.status(200)
                    res.text.should.equal(JSON.stringify(contact))
                    done()
                })
        })
        it('should get error 404', (done) => {
            chai.request(app)
                .get('/contacts/find/Doe')
                .end((err, res) => {
                    res.should.have.status(404)
                    res.text.should.equal('No contact named Doe.')
                    done()
                })
        })
    })
    describe('POST', () => {
        it('should get "Missing contact fields."', (done) => {
            chai.request(app)
                .post('/contacts/add')
                .send({name: "Doe"})
                .end((err, res) => {
                    res.should.have.status(400)
                    res.text.should.equal('Missing contact fields.')
                    done()
                })
        })
        it('should get "Contact Doe added successfully."', (done) => {
            chai.request(app)
                .post('/contacts/add')
                .send({name: "Doe", phone_number: "", address: ""})
                .end((err, res) => {
                    res.should.have.status(200)
                    res.text.should.equal('Contact Doe added successfully.')
                    done()
                })
        })
        it('should get "Contact Doe already exists."', (done) => {
            chai.request(app)
                .post('/contacts/add')
                .send({name: "Doe", phone_number: "", address: ""})
                .end((err, res) => {
                    res.should.have.status(409)
                    res.text.should.equal('Contact Doe already exists.')
                    done()
                })
        })
    })
})
