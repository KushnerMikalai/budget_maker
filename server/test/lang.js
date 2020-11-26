/* eslint handle-callback-err: "off"*/

process.env.NODE_ENV = 'test'

const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')

const should = chai.should()

chai.use(chaiHttp)

describe('*********** LANG ***********', () => {
    describe('/GET get land object', () => {
        it('it should GET lang object', (done) => {
            chai
                .request(server)
                .get('/lang/get?keys=common&lang=en')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('object')
                    res.body.should.include.keys('lang', 'data')
                    done()
                })
        })
        it('it should GET lang object with empty query', (done) => {
            chai
                .request(server)
                .get('/lang/get?lang=en')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.an('object')
                    res.body.should.include.keys('lang', 'data')
                    done()
                })
        })
    })
})
