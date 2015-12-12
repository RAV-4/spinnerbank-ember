import Ember from 'ember';

export default Ember.Service.extend({

  currentUser: null,
  store: Ember.inject.service(),
  login(asesor){
    this.set("currentUser", asesor.email);
    this.set("identi",asesor.id);
     /*jshint -W117*/ //elimina la alerta del no definido
    Cookies.set("userId",asesor.id);
     /*jshint +W117*/ //elimina la alerta del no definido
  },

  logout(){
    this.set("currentUser", null);
    this.set("identi",null);
     /*jshint -W117*/ //elimina la alerta del no definido
    Cookies.remove("userId");
     /*jshint +W117*/ //elimina la alerta del no definido
  },

  initializeFromCookie: function(){
     /*jshint -W117*/ //elimina la alerta del no definido
  	var userId = Cookies.get('userId');
     /*jshint +W117*/ //elimina la alerta del no definido
  	if(!!userId){
  		var buscar = 'http://spinnerbank-api-internal.herokuapp.com/temp/login/flameAdmin@flame.com/F14M3';
   		 /*jshint -W117*/ //elimina la alerta del no definido
      $.getJSON(buscar, function(data) {
         /*jshint +W117*/ //elimina la alerta del no definido
    		this.set('currentUser',data.email);
  		}.bind(this));
  	}
  }.on('init')

});
