import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('bikestore', params.bikestore_id);
  },

  actions: {
      saveComment(params) {
        var newComment = this.store.createRecord('comment', params);
        var bikeStore = params.bikestore;
        bikeStore.get('comments').addObject(newComment);
        newComment.save().then(function() {
          return bikeStore.save();
        });
        this.transitionTo('storecomments', params.bikestore);
      }
    }
});
