import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  reportDate: DS.attr('date'),
  bookScore: DS.attr('number'),
  uRLPresentation: DS.attr('string'),
  uRLVideo: DS.attr('string'),
  review: DS.attr('string'),
  book: DS.belongsTo('i-i-s-club-book', { inverse: null, async: false }),
  speaker: DS.belongsTo('i-i-s-club-speaker', { inverse: null, async: false }),
  clubMeeting: DS.belongsTo('i-i-s-club-club-meeting', { inverse: 'report', async: false })
});

export let ValidationRules = {
  reportDate: {
    descriptionKey: 'models.i-i-s-club-report.validations.reportDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  bookScore: {
    descriptionKey: 'models.i-i-s-club-report.validations.bookScore.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true, gt: 0, lte: 5 }),
    ],
  },
  uRLPresentation: {
    descriptionKey: 'models.i-i-s-club-report.validations.uRLPresentation.__caption__',
    validators: [
      validator('ds-error'),
      validator('format', {
        type: 'url'
      })

    ],
  },
  uRLVideo: {
    descriptionKey: 'models.i-i-s-club-report.validations.uRLVideo.__caption__',
    validators: [
      validator('ds-error'),
      validator('format', {
        type: 'url'
      })
    ],
  },
  review: {
    descriptionKey: 'models.i-i-s-club-report.validations.review.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  book: {
    descriptionKey: 'models.i-i-s-club-report.validations.book.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  speaker: {
    descriptionKey: 'models.i-i-s-club-report.validations.speaker.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  clubMeeting: {
    descriptionKey: 'models.i-i-s-club-report.validations.clubMeeting.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ReportE', 'i-i-s-club-report', {
    reportDate: attr('???????? ??????????????', { index: 0 }),
    bookScore: attr('???????????? ??????????', { index: 1 }),
    uRLPresentation: attr('???????????? ???? ??????????????????????', { index: 2 }),
    uRLVideo: attr('???????????? ???? ??????????', { index: 3 }),
    review: attr('????????????????', { index: 4 }),
    book: belongsTo('i-i-s-club-book', '??????????', {
      title: attr('~', { index: 6, hidden: true }),
      averageCount: attr('~', { index: 7, hidden: true })

    }, { index: 5, displayMemberPath: 'title' }),
    speaker: belongsTo('i-i-s-club-speaker', '????????????', {
      lastName: attr('~', { index: 8, hidden: true }),
      firstName: attr('~', { index: 9, hidden: true }),
      middleName: attr('~', { index: 10, hidden: true })
    }, { index: 7, displayMemberPath: 'lastName' })
  });
};
