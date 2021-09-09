import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-club-report', 'Unit | Serializer | i-i-s-club-report', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-club-report',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
