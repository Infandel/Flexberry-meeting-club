import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-club-book-l');
  this.route('i-i-s-club-book-e',
  { path: 'i-i-s-club-book-e/:id' });
  this.route('i-i-s-club-book-e.new',
  { path: 'i-i-s-club-book-e/new' });
  this.route('i-i-s-club-club-meeting-l');
  this.route('i-i-s-club-club-meeting-e',
  { path: 'i-i-s-club-club-meeting-e/:id' });
  this.route('i-i-s-club-club-meeting-e.new',
  { path: 'i-i-s-club-club-meeting-e/new' });
  this.route('i-i-s-club-speaker-l');
  this.route('i-i-s-club-speaker-e',
  { path: 'i-i-s-club-speaker-e/:id' });
  this.route('i-i-s-club-speaker-e.new',
  { path: 'i-i-s-club-speaker-e/new' });
});

export default Router;
