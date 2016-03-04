import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('bikestore');
  },

  actions: {
    saveBikeStore(params) {
      var newBikeStore = this.store.createRecord('bikestore', params);
      newBikeStore.save();
      this.transitionTo('admin');
    }
  }
});
