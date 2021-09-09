import { Serializer as SpeakerSerializer } from
  '../mixins/regenerated/serializers/i-i-s-club-speaker';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SpeakerSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
