import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
      this.set('description', "");
      this.set('author', "");
      this.set('bikelike', "");
      this.set('timestamp', "");
    },

    saveComment() {
      var params = {
        bikestore: this.get('bikestore'),
        description: this.get('description'),
        author: this.get('author'),
        bikelike: this.get('bikelike'),
        timestamp: Date.now()
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
