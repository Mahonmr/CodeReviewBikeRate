import Ember from 'ember';

export default Ember.Component.extend({
  average_stars: Ember.computed('bikestore', function() {
    var i = 0;
    var j = 0;
    this.bikestore.get('comments').map(function(comment){
      j += 1;
      i += parseInt(comment.get('bikelike'));
    });
     return ~~(i / j);
  })
});
