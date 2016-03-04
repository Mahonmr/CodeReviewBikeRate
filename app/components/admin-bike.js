import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveBikeStore(params) {
      this.sendAction('saveBikeStore', params);
    }
  }
});
