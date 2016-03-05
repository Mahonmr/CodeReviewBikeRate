import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      stores: this.store.findAll('bikestore'),
      comments: this.store.findAll('comment')
    });
  },
});
