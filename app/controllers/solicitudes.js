import Ember from 'ember';

export default Ember.Controller.extend({
	

//se hace la llamada la api, con el numero de documento y tipo del mismo, consulta la cual trae retorna datos personales del cliente  y los productos que tiene  
searchSol(identi){
	var buscar = 'https://spinnerbank-api-internal.herokuapp.com/adviser/'+identi+'/requests';
	$.getJSON(buscar, function(data) {
		this.set('model', data);
	}.bind(this));
}
});