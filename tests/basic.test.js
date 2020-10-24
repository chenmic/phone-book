
const chai = require('chai')
const chaiHttp = require('chai-http')

const app = require('../app')

chai.use(chaiHttp)
chai.should()

describe('Basic', () => {
    it('should get error 404', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(404)
                done()
            })
    })
    it('should get "Hi Trax! This is Chen"', (done) => {
        chai.request(app)
            .get('/whos-there')
            .end((err, res) => {
                res.should.have.status(200)
                res.text.should.equal('Hi Trax! This is Chen')
                done()
            })
    })
})
