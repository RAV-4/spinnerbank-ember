import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    return $.getJSON(
    'http://spinnerbank-api-external.herokuapp.com/productos/1936941186',
    function(data){
    	return data;
      }
    );
<<<<<<< HEAD
  }
});
=======
  }  
});
>>>>>>> 6842821e34b7aa89cc84160ac715e71fe74bc5d6
