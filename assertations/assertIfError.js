/**
 * Short description
 *
 * throws value if value is not undefined or null. This is useful when testing the error
 * argument in callbacks. The stack trace contains all frames from the error passed to
 * ifError() including the potential new frames for ifError() itself.
 */
const assert = require('assert').strict;

assert.ifError(null);
// OK
assert.ifError(0);
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 0
assert.ifError('error');
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: 'error'
assert.ifError(new Error());
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: Error

// Create some random error frames.
let err;
(function errorFrame() {
  err = new Error('test error');
})();

(function ifErrorFrame() {
  assert.ifError(err);
})();
// AssertionError [ERR_ASSERTION]: ifError got unwanted exception: test error
//     at ifErrorFrame
//     at errorFrame

/**
 * More about:
 *
 * assert.ifError(value):https://nodejs.org/dist/latest-v14.x/docs/api/assert.html#assert_assert_iferror_value
 */
