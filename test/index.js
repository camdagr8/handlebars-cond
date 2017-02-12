var should = require('chai').should(),
    cond = require('../index.js').test;


describe('#cond(1, "<", 1)', function() {
  it('less than -> false', function() {
	cond(1, '<', 1).should.equal(false);
  });
});

describe('#cond(0, "<=", 1)', function() {
  it('less than or equal to -> true', function() {
	cond(0, '<=', 1).should.equal(true);
  });
});

describe('#cond(1, "===", "1")', function() {
  it('strict equal to -> false', function() {
	cond(1, '===', '1').should.equal(false);
  });
});


describe('#cond(0, "!==", 1)', function() {
  it('strict does not equal -> true', function() {
	cond(0, '!==', 1).should.equal(true);
  });
});

describe('#cond(1, "typeof", "number")', function() {
  it('typeof -> true', function() {
	cond(1, 'typeof', 'number').should.equal(true);
  });
});

describe('#cond(null, "||", null)', function() {
  it('this or that -> false', function() {
	cond(null, '||', null).should.equal(false);
  });
});

describe('#cond(null, "||", 1)', function() {
  it('this or that -> true', function() {
	cond(null, 'or', 1).should.equal(true);
  });
});

describe('#cond(1, "&&", 1)', function() {
  it('this and that -> true', function() {
	cond(1, 'and', 1).should.equal(true);
  });
});

describe('#cond(null, "&&", 1)', function() {
  it('this and that -> false', function() {
	cond(null, '&&', 1).should.equal(false);
  });
});
