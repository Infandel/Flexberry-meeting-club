import EditFormRoute from 'ember-flexberry/routes/edit-form';

export default EditFormRoute.extend({
  modelProjection: 'BookE',
  modelName: 'i-i-s-club-book',

  setupController(controller) {
    this._super(...arguments);
    controller._loadData();
  }
});
