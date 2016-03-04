import Ember from 'ember';

export default Ember.Component.extend({
  showComments: false,
  actions: {
    showCommentsForm() {
      this.set('showComments', true);
    },
    hideCommentsForm(){
      this.set('showComments', false);
    }
  }
});
