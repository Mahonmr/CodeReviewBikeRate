import Ember from 'ember';

export default Ember.Component.extend({
  average_stars: Ember.computed('store.comments', function() {
    var i = 0;
    console.log(this.get('store.comments'))
    // this.get('store.comments').forEach(function(){
    //    console.log(comment.bikelike)
    //   i = i + 1;
    //
    // })
    // return i;
    // return this.get('store.comments.length')
  })
});
