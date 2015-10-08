App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.route('first-route',{path:'first-route'})//la ruta y el nombre del path no tiene que ser el mismo
  
});

//App.FirstRoute = Ember.Route.extend({


	
//});

App.FirstRouteController = Ember.Controller.extend({


 
actions:{

		click_handler: function(){

			alert('click');
		}
	}


});

App.IndexRoute = Ember.Route.extend({
 model: function() {
    return[

     

    ] ;
  }


});
