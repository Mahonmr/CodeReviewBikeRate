import Ember from 'ember';

export function bikeCost(params) {
  var price = params[0];

  if(price == 5) {
    return '$$$$$';
  }else if(price == 4){
    return '$$$$';
  }else if(price == 3){
    return '$$$';
  }else if(price == 2){
    return '$$';
  }else{
    return '$';
  }
}

export default Ember.Helper.helper(bikeCost);
