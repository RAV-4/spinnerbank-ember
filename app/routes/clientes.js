import Ember from 'ember';

export default Ember.Route.extend({
 setupController: function(controller, model) {
    controller.set('model', model);
  },

 renderTemplate: function(){
 	 	this.render();	
		this.render('tabla',{
		into: 'clientes',
		outlet: 'tabla'
 	});

 }

});
