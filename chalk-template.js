'use strict';
var chalk = require('chalk');
var forIn = require('for-in');

/**
 * @param {string} str - the template string
 * @param {Object} replacements - additional replacements
 * @returns {string} the replaced string
 */
function chalkTemplate(str, replacements) {
	var out = String(str);

	replacements = replacements || {};

	forIn(chalk.styles, function (value, key) {
		out = out
			.replace(new RegExp('<' + key + '>', 'g'), value.open)
			.replace(new RegExp('</' + key + '>', 'g'), value.close);
	});

	forIn(replacements, function (value, key) {
		out = out.replace(new RegExp('<' + key + '/>', 'g'), value);
	});

	return out;
}

module.exports = chalkTemplate;
