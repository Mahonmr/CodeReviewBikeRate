import Ember from 'ember';

export function bikeLiker(params) {
  var like = params[0];
  if(like == 5) {
    return '&&&&&'
  }else if(like == 4){
    return '&&&&'
  }else if(like == 3){
    return '&&&'
  }else if(like == 2){
    return '&&'
  }else{
    return '&'
  }
}

export default Ember.Helper.helper(bikeLiker);
// glyphicon-road
