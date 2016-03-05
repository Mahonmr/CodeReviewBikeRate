import Ember from 'ember';

export default Ember.Component.extend({
  sortProperties: ['name'],
  sortedbikestores: Ember.computed.sort('stores', 'sortProperties')
});
