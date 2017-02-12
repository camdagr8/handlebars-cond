/**
 * Handlebars cond helper
 * @param lvalue
 * @param conditon {String} == === != !== < > <= >= && and || or typeof
 * @param rvalue {Number} How much to increment per iteration.
 */

var tandt = function (l, r) {
	return (typeof l !== 'undefined' && typeof r !== 'undefined' && l !== null && r !== null);
};

var tort = function (l, r) {
	if (typeof l !== 'undefined' && l !== null) { return true; }
	if (typeof r !== 'undefined' && r !== null) { return true; }
	return false;
};

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
		'typeof'	: function(l, r) { return typeof l == r; },
		'&&' 		: function(l, r) { return tandt(l, r); },
		'and' 		: function (l, r) { return tandt(l, r); },
		'||' 		: function (l, r) { return tort(l, r); },
		'or' 		: function (l, r) { return tort(l, r); }
	};

	operator = String(operator).toLowerCase();

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
