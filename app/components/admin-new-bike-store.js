import Ember from 'ember';

export default Ember.Component.extend({
  addNewBikeStore: false,
  actions: {
    bikeFormShow() {
      this.set('addNewBikeStore', true);
      this.set('name', "");
      this.set('bikestore_url', "");
      this.set('bikeprice', "");
    },

    saveBikeStore() {
      var params = {
        name: this.get('name'),
        bikestore_url: this.get('bikestore_url'),
        bikeprice: this.get('bikeprice')
      };
      this.set('addNewBikeStore', false);
      this.sendAction('saveBikeStore', params);
    }
  }
});
