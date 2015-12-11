import Ember from 'ember';

export default Ember.Controller.extend({

	searchClient(documentNumber,documentType){
		var buscar = 'https://spinnerbank-api-internal.herokuapp.com/user/'+documentType+'/'+documentNumber+'/productos';
		$.getJSON(buscar, function(data) {
			this.set('model', data);
		}.bind(this));
	}
});
