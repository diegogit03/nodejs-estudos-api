/**
 * Short description
 *
 * Expects the string input not to match the regular expression.
 */

const assert = require('assert').strict;

assert.doesNotMatch('I will fail', /fail/);
// AssertionError [ERR_ASSERTION]: The input was expected to not match the ...

assert.doesNotMatch(123, /pass/);
// AssertionError [ERR_ASSERTION]: The "string" argument must be of type string.

assert.doesNotMatch('I will pass', /different/);
// OK

/**
 * More about
 *
 * assert.doesNotMatch(string, regexp[, message]): https://nodejs.org/dist/latest-v14.x/docs/api/assert.html#assert_assert_doesnotmatch_string_regexp_message
 */
