import Ember from 'ember';

export default Ember.Controller.extend({

	searchClient(documentNumber,documentType){
		var buscar = 'https://spinnerbank-api-internal.herokuapp.com/client/'+documentType+'/'+documentNumber+'';
		$.getJSON(buscar, function(data) {
			this.set('model', data);
		}.bind(this));
	}
});
