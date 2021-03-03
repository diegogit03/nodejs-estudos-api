const assertStricted = require('assert').strict;

assertStricted.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);


// Example with strict mode disabled
const assertNotStricted = require('assert');

assertNotStricted.deepStrictEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);

/**
 * More about:
 *
 * Strict Mode: https://nodejs.org/dist/latest-v14.x/docs/api/assert.html#assert_strict_assertion_mode
 * Legacy Mode: https://nodejs.org/dist/latest-v14.x/docs/api/assert.html#assert_legacy_assertion_mode
 */
