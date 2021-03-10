/**
 * Short description
 *
 * Tests strict inequality between the actual and expected parameters as determined by
 * the SameValue Comparison.
 */
const assert = require('assert').strict;

assert.notStrictEqual(1, 2);
// OK

assert.notStrictEqual(1, 1);
// AssertionError [ERR_ASSERTION]: Expected "actual" to be strictly unequal to:
//
// 1

assert.notStrictEqual(1, '1');
// OK

/**
 * More about
 *
 * assert.notStrictEqual(actual, expected[, message]): https://nodejs.org/dist/latest-v14.x/docs/api/assert.html#assert_assert_notstrictequal_actual_expected_message
 */
