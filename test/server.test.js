const assert = require("chai").assert;
const app = require("../server").app;
// not sure what these two do (ask Kristen later)
const expect = chai.expect;
const should = chai.should();


//tests go here for server tests

// starts the server for our test and closes it once testing is clompleted 
describe('server', function () {
    before(function () {
        server.listen(8080);
    });

    after(function () {
        server.close();
    })

})
// testing for successful connection 

describe('/', function (done) {
    http.get('http://localhost:8000', function (res) {
        assert.equal(200, res.statusCode);
        done();
    });
})