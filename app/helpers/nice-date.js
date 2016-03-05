import Ember from 'ember';

export function time(params) {
  var time = params[0];
 return moment(time).format('LL');
};

export default Ember.Helper.helper(time);
