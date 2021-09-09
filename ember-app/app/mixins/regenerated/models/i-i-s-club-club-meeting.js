import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  meetingDate: DS.attr('date'),
  report: DS.hasMany('i-i-s-club-report', { inverse: 'clubMeeting', async: false })
});

export let ValidationRules = {
  meetingDate: {
    descriptionKey: 'models.i-i-s-club-club-meeting.validations.meetingDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  report: {
    descriptionKey: 'models.i-i-s-club-club-meeting.validations.report.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ClubMeetingE', 'i-i-s-club-club-meeting', {
    meetingDate: attr('Дата встречи', { index: 0 }),
    report: hasMany('i-i-s-club-report', 'Доклад', {
      reportDate: attr('Дата доклада', { index: 0 }),
      bookScore: attr('Оценка книги', { index: 1 }),
      uRLPresentation: attr('Ссылка на презентацию', { index: 2 }),
      uRLVideo: attr('Ссылка на видео', { index: 3 }),
      review: attr('Рецензия', { index: 4 }),
      book: belongsTo('i-i-s-club-book', 'Книга', {
        title: attr('~', { index: 6, hidden: true })
      }, { index: 5, displayMemberPath: 'title' }),
      speaker: belongsTo('i-i-s-club-speaker', 'Спикер', {
        lastName: attr('~', { index: 8, hidden: true }),
        firstName: attr('~', { index: 9, hidden: true }),
        middleName: attr('~', { index: 10, hidden: true })
      }, { index: 7, displayMemberPath: 'lastName' })
    })
  });

  modelClass.defineProjection('ClubMeetingL', 'i-i-s-club-club-meeting', {
    meetingDate: attr('Дата встречи', { index: 0 }),
    report: hasMany('i-i-s-club-report', 'Доклады', {
      reportDate: attr('Дата доклада', { index: 0 }),
      bookScore: attr('Оценка книги', { index: 1 }),
      uRLPresentation: attr('Ссылка на презентацию', { index: 2 }),
      uRLVideo: attr('Ссылка на видео', { index: 3 }),
      review: attr('Рецензия', { index: 4 }),
      book: belongsTo('i-i-s-club-book', 'Книга', {
        title: attr('~', { index: 6, hidden: true })
      }, { index: 5, displayMemberPath: 'title' }),
      speaker: belongsTo('i-i-s-club-speaker', 'Спикер', {
        lastName: attr('~', { index: 8, hidden: true }),
      }, { index: 7, displayMemberPath: 'lastName' })
    })
  });
};
