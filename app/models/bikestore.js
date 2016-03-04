import DS from 'ember-data';

export default DS.Model.extend({
  comments: DS.hasMany('comment', { async: true }),
  name: DS.attr(),
  bikestore_url: DS.attr(),
  bikeprice: DS.attr()
});
