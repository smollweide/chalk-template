'use strict';
var assert = require('assert');
var chalkTemplate = require('./chalk-template');
var desc = [
	[
		'<bold><red>Title</red></bold>',
		{},
		'\u001b[1m\u001b[31mTitle\u001b[39m\u001b[22m',
	],
	[
		'<underline>Title</underline>',
		{},
		'\u001b[4mTitle\u001b[24m',
	],
	[
		'<logo/>',
		{ logo: 'Logo' },
		'Logo',
	],
];

describe('chalkTemplate', function () {

	it('bold and red', function () {
		var item = desc[0];
		assert.equal(chalkTemplate(item[0], item[1]), item[2]);
	});

	it('underline', function () {
		var item = desc[1];
		assert.equal(chalkTemplate(item[0], item[1]), item[2]);
	});

	it('custom replacements', function () {
		var item = desc[2];
		assert.equal(chalkTemplate(item[0], item[1]), item[2]);
	});

});
