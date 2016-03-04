import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('storecomments', {path: 'bikestore/:bikestore_id'});
});

export default Router;
