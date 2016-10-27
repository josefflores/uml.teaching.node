var chai = require('chai');
var assert = chai.assert;

describe('What I am testing', function() {
    it('What is being tested', function(done) {
        assert.equal(1 + 1, 2);
        assert.equal(1 + 1, 3);
        done();
    });
});