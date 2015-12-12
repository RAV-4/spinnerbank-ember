import Ember from 'ember';

export default Ember.Controller.extend({

	searchClient(documentNumber,documentType){
		var buscar = 'https://spinnerbank-api-internal.herokuapp.com/client/'+documentType+'/'+documentNumber+'';
		 /*jshint -W117*/ //elimina la alerta del no definido
		$.getJSON(buscar, function(data) {
			 /*jshint +W117*/ //elimina la alerta del no definido
			this.set('model', data);
		}.bind(this));
	}
});
