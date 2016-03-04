import DS from 'ember-data';

export default DS.Model.extend({
  bikestore: DS.belongsTo('bikestore', { async: true }),
  description: DS.attr(),
  author: DS.attr(),
  bikelike: DS.attr()
});
