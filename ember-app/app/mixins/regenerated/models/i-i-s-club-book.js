import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  title: DS.attr('string'),
  author: DS.attr('string'),
  pagesCount: DS.attr('number'),
  uRLCover: DS.attr('string'),
  uRLDescription: DS.attr('string'),
  tags: DS.attr('string'),
  averageCount: DS.attr('decimal')
});

export let ValidationRules = {
  title: {
    descriptionKey: 'models.i-i-s-club-book.validations.title.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  author: {
    descriptionKey: 'models.i-i-s-club-book.validations.author.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  pagesCount: {
    descriptionKey: 'models.i-i-s-club-book.validations.pagesCount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  uRLCover: {
    descriptionKey: 'models.i-i-s-club-book.validations.uRLCover.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  uRLDescription: {
    descriptionKey: 'models.i-i-s-club-book.validations.uRLDescription.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  tags: {
    descriptionKey: 'models.i-i-s-club-book.validations.tags.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  averageCount: {
    descriptionKey: 'models.i-i-s-club-book.validations.averageCount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookE', 'i-i-s-club-book', {
    title: attr('Название', { index: 0 }),
    author: attr('Автор', { index: 1 }),
    pagesCount: attr('Количество страниц', { index: 2 }),
    uRLCover: attr('Ссылка на обложку', { index: 3 }),
    uRLDescription: attr('Ссылка на описание', { index: 4 }),
    tags: attr('Тэги', { index: 5 }),
    averageCount: attr('Средняя оценка', { index: 6 })
  });

  modelClass.defineProjection('BookL', 'i-i-s-club-book', {
    title: attr('Название', { index: 0 }),
    author: attr('Автор', { index: 1 }),
    pagesCount: attr('Количество страниц', { index: 2 }),
    uRLCover: attr('Ссылка на обложку', { index: 3 }),
    uRLDescription: attr('Ссылка на описание', { index: 4 }),
    tags: attr('Тэги', { index: 5 }),
    averageCount: attr('Средняя оценка', { index: 6 })
  });
};
