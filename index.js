/**
 * Handlebars cond helper
 * @param lvalue
 * @param conditon {String} == === != !== < > <= >= typeof
 * @param rvalue {Number} How much to increment per iteration.
 */
var test = function(lvalue, operator, rvalue) {
    var operators, result;

	if (arguments.length < 3) {
		throw new Error("Handlerbars Helper 'cond' needs 2 parameters");
	}

	operators = {
		'=='		: function(l, r) { return l == r; },
		'==='		: function(l, r) { return l === r; },
		'!='		: function(l, r) { return l != r; },
		'!=='		: function(l, r) { return l !== r; },
		'<'			: function(l, r) { return l < r; },
		'>' 		: function(l, r) { return l > r; },
		'<=' 		: function(l, r) { return l <= r; },
		'>=' 		: function(l, r) { return l >= r; },
		'typeof'	: function(l, r) { return typeof l == r; }
	};

	if (!operators[operator]) {
		throw new Error("Handlerbars Helper 'cond' doesn't recognize the operator " + operator);
	}

	return operators[operator](lvalue, rvalue);
};

var cond = function(lvalue, operator, rvalue, options) {
    var operators, result;

	if (options === undefined) {
		options 	= rvalue;
		rvalue 		= operator;
		operator 	= "===";
	}

	result = test(lvalue, operator, rvalue);

	if (result) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}
};

module.exports = {
	cond: cond,
	test: test
}
