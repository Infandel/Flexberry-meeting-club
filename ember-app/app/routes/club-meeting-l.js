import Route from '@ember/routing/route';
import Builder from 'ember-flexberry-data/query/builder';
import { later } from '@ember/runloop';

export default Route.extend({
  model() {
    
    let store = this.get('store');

    let builder = new Builder (store, 'i-i-s-club-club-meeting')
      .selectByProjection('ClubMeetingE')
    
    
    return store.query('i-i-s-club-club-meeting', builder.build())       
  },

  setupController(controller) {
    this._super(...arguments);
    controller._loadMeetingDates()    
  }

});
