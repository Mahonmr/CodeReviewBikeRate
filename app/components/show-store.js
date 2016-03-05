import Ember from 'ember';

export default Ember.Component.extend({
  average_stars: Ember.computed('bikestore', function() {
    var i = 0;
    this.bikestore.get('comments').map(function(comment){
      i += 1;
    })
     return i;
  })
});
