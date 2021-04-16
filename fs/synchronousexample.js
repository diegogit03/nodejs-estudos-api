const fs = require('fs');

try {
  fs.unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  console.log(err);
}

/**
 * More about:
 *
 * SynchronousExample: https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_synchronous_example
 */
