import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'встречи-клуба': {
          caption: 'встречи-клуба',
          title: 'встречи-клуба',
          'i-i-s-club-club-meeting-l': {
            caption: 'i-i-s-club-club-meeting-l',
            title: 'i-i-s-club-club-meeting-l'
          }
        },
        книги: {
          caption: 'книги',
          title: 'книги',
          'i-i-s-club-book-l': {
            caption: 'i-i-s-club-book-l',
            title: 'i-i-s-club-book-l'
          }
        },
        спикеры: {
          caption: 'спикеры',
          title: 'спикеры',
          'i-i-s-club-speaker-l': {
            caption: 'i-i-s-club-speaker-l',
            title: 'i-i-s-club-speaker-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
