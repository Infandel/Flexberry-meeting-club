import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-club-book', 'Unit | Model | i-i-s-club-book', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-club-book',
    'model:i-i-s-club-club-meeting',
    'model:i-i-s-club-report',
    'model:i-i-s-club-speaker',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
