'use strict';

const assert = require('assertthat');

suite('units', () => {
  setup(async () => {
    throw new Error('Error in setup.');
  });

  test('does not fail.', done => {
    assert.that(true).is.true();
    done();
  });
});
