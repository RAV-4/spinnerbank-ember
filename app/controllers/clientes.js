import Ember from 'ember';

export default Ember.Controller.extend({
	isFailed:false,

actions: {

  compidClient: function(){
  var prueba  = 1111;
  let idClient = this.get('idClient');
  if (idClient === prueba){
    window.alert(idClient);
    }
    else{
      this.set('isFailed', true);
    }
  },
      search(idClient) {
        var buscar = 'http://spinnerbank-api-external.herokuapp.com/productos/'+idClient;   
     $.getJSON(buscar, function(data) {
       this.set('model', data);
     }.bind(this));
    }
  }
});
