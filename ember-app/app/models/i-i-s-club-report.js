import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';
import OfflineModelMixin from 'ember-flexberry-data/mixins/offline-model';
import { observer } from '@ember/object';
import { once } from '@ember/runloop';
import { on } from '@ember/object/evented';

import {
  defineProjections,
  ValidationRules,
  Model as ReportMixin
} from '../mixins/regenerated/models/i-i-s-club-report';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(OfflineModelMixin, ReportMixin, Validations, {
  /*
   * Автозаполнение даты доклада от даты встречи
   */
  _reportDateChanged: on('init', observer('clubMeeting.meetingDate', function() {
    once(this, '_reportDateCompute');
  })),
  _reportDateCompute: function() {
    let clubMeeting = this.get('clubMeeting');
    let meetingDate
    if (clubMeeting) {
      meetingDate = clubMeeting.get('meetingDate');
    }

    if (!this.get('isDeleted')) { // проверяем, что текущая модель не была удалена
      this.set('reportDate', meetingDate);
    }
  },
});

defineProjections(Model);

export default Model;
