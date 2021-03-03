/**
 * Short description
 *
 * Creates a new CallTracker object which can be used to track if functions were called a
 * specific number of times. The tracker.verify() must be called for the verification to
 * take place. The usual pattern would be to call it in a process.on('exit') handler.
 */

const assert = require('assert');

const tracker = new assert.CallTracker();

function func() {}

const callsfunc = tracker.calls(func, 1);

callsfunc();

process.on('exit', () => {
    tracker.verify();
});

/**
 * More about:
 *
 * https://nodejs.org/dist/latest-v14.x/docs/api/assert.html#assert_new_assert_calltracker
 */
