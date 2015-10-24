
import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    
    return $.getJSON(
    'http://spinnerbank-api-external.herokuapp.com/productos/1936941186',
    function(data){
    	return data;
      }
    );
  }
});