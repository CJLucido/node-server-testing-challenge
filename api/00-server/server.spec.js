const testerLib = require('supertest')
const server = require('./server')


describe('server.js', function(){
    describe('it tests a GET /', function(){
        it('should return an api message of \'resource testing project', function(){
            return testerLib(server)
                    .get('/')
                    .then(res => {
                        expect(res.body.api).toBe('resource testing project')
                    });
        });
    });
});