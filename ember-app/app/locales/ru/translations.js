import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISClubBookLForm from './forms/i-i-s-club-book-l';
import IISClubClubMeetingLForm from './forms/i-i-s-club-club-meeting-l';
import IISClubSpeakerLForm from './forms/i-i-s-club-speaker-l';
import IISClubBookEForm from './forms/i-i-s-club-book-e';
import IISClubClubMeetingEForm from './forms/i-i-s-club-club-meeting-e';
import IISClubSpeakerEForm from './forms/i-i-s-club-speaker-e';
import IISClubBookModel from './models/i-i-s-club-book';
import IISClubClubMeetingModel from './models/i-i-s-club-club-meeting';
import IISClubReportModel from './models/i-i-s-club-report';
import IISClubSpeakerModel from './models/i-i-s-club-speaker';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-club-book': IISClubBookModel,
    'i-i-s-club-club-meeting': IISClubClubMeetingModel,
    'i-i-s-club-report': IISClubReportModel,
    'i-i-s-club-speaker': IISClubSpeakerModel
  },

  'application-name': 'Книжный клуб',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Книжный клуб',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Книжный клуб',
          title: 'Club app'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'встречи-клуба': {
          caption: 'Встречи клуба',
          title: 'Встречи клуба',
          'i-i-s-club-club-meeting-l': {
            caption: 'Встречи клуба',
            title: ''
          }
        },
        книги: {
          caption: 'Книги',
          title: 'Книги',
          'i-i-s-club-book-l': {
            caption: 'Книги',
            title: ''
          }
        },
        спикеры: {
          caption: 'Спикеры',
          title: 'Спикеры',
          'i-i-s-club-speaker-l': {
            caption: 'Спикеры',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-club-book-l': IISClubBookLForm,
    'i-i-s-club-club-meeting-l': IISClubClubMeetingLForm,
    'i-i-s-club-speaker-l': IISClubSpeakerLForm,
    'i-i-s-club-book-e': IISClubBookEForm,
    'i-i-s-club-club-meeting-e': IISClubClubMeetingEForm,
    'i-i-s-club-speaker-e': IISClubSpeakerEForm
  },

});

export default translations;
