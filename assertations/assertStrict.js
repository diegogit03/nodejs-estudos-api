const assertStricted = require('assert').strict;

assertStricted.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);


// Example with strict mode disabled
const assertNotStricted = require('assert');

assertNotStricted.deepStrictEqual([[[1, 2, 3]], 4, 5], [[[1, 2, '3']], 4, 5]);
