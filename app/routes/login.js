import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return $.get('asesores.json');
  }
});
