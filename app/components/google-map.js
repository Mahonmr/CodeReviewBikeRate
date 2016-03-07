export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(store) {
      console.log(store)
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(store.get('latitude'), store.get('longitude')),
        zoom: 15
      };
      var marker = new google.maps.Marker({
        position: {lat: store.get('latitude'), lng: store.get('longitude')},
        map: this.get('map').findMap(container, options)
      });
    }
  }
});
