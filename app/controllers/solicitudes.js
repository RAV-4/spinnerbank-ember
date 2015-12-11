import Ember from 'ember';

export default Ember.Controller.extend({
	

//se hace la llamada la api, con el numero de documento y tipo del mismo, consulta la cual trae retorna datos personales del cliente  y los productos que tiene  
searchSol: function(){
	var buscar = 'https://spinnerbank-api-internal.herokuapp.com/adviser/1216/requests';
	$.getJSON(buscar, function(data) {
		this.set('model', data);
	}.bind(this));
}.on('init')
});