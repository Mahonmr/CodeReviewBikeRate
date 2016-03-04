import DS from 'ember-data';

export default DS.Model.extend({
  // categoryitems: DS.hasMany('categoryitem', { async: true }),
  name: DS.attr(),
  bikestore_url: DS.attr(),
  bikeprice: DS.attr()
});
