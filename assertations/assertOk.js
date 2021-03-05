/**
 * Short description
 *
 * Tests if value is truthy. It is equivalent to assert.equal(!!value, true, message).
 */

const assert = require('assert');

assert(true, 'Asserting True');
assert.ok(false, 'Asserting False');

/**
 * More about
 *
 * assert.ok(value[, message]): https://nodejs.org/dist/latest-v14.x/docs/api/assert.html#assert_assert_ok_value_message
 * assert(value[, message]): https://nodejs.org/dist/latest-v14.x/docs/api/assert.html#assert_assert_value_message
 */
