'use strict';

module.exports = {
	env: {
		es6: true,
	},
	rules: {
		strict: ['error', 'global'],
		'multiline-comment-style': ['error', 'starred-block'],
		'spaced-comment': ['error', 'always'],
		semi: ['error', 'always'],
		'semi-spacing': 'error',
		'no-extra-semi': 'error',
		'semi-style': ['error', 'last'],
		'max-len': ['error', { code: 80 }],
		'no-unexpected-multiline': 'error',
		'comma-style': ['error', 'last'],
		'comma-dangle': ['error', 'always-multiline'],
	},
};
