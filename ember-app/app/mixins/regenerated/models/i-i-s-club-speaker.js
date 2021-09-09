import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  middleName: DS.attr('string')
});

export let ValidationRules = {
  firstName: {
    descriptionKey: 'models.i-i-s-club-speaker.validations.firstName.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  lastName: {
    descriptionKey: 'models.i-i-s-club-speaker.validations.lastName.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  middleName: {
    descriptionKey: 'models.i-i-s-club-speaker.validations.middleName.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SpeakerE', 'i-i-s-club-speaker', {
    firstName: attr('Имя', { index: 0 }),
    lastName: attr('Фамилия', { index: 1 }),
    middleName: attr('Отчество', { index: 2 })
  });

  modelClass.defineProjection('SpeakerL', 'i-i-s-club-speaker', {
    firstName: attr('Имя', { index: 0 }),
    lastName: attr('Фамилия', { index: 1 }),
    middleName: attr('Отчество', { index: 2 })
  });
};
