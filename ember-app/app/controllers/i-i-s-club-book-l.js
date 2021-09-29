import ListFormController from 'ember-flexberry/controllers/list-form';
import { inject } from '@ember/service';
import Model from '../models/i-i-s-club-book';


export default ListFormController.extend({
  /**
    Name of related edit form route.

    @property editFormRoute
    @type String
    @default 'i-i-s-club-book-e'
   */
  editFormRoute: 'i-i-s-club-book-e',

  /**
  Сервис для событий objectListView
    @property lookupEventsService
    @type Service
  */
    objectListViewEventsService: inject('objectlistview-events'),

  didReceiveAttrs() {  
    this._super(...arguments);

    this.get('objectListViewEventsService').on('didReceiveAttrs', this, Model._averageBookScoreComputed);
  },
  
});
