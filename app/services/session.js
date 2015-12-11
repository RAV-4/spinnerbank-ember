import Ember from 'ember';

export default Ember.Service.extend({

  currentUser: null,
  store: Ember.inject.service(),
  login(asesor){
    this.set("currentUser", asesor.email);
    this.set("identi",asesor.id);
    Cookies.set("userId",asesor.id);
  },

  logout(){
    this.set("currentUser", null);
    this.set("identi",null);
    Cookies.remove("userId");
  },

  initializeFromCookie: function(){
  	var userId = Cookies.get('userId');
  	if(!!userId){
  		var buscar = 'http://spinnerbank-api-internal.herokuapp.com/temp/login/flameAdmin@flame.com/F14M3';
   		$.getJSON(buscar, function(data) {
    		this.set('currentUser',data.email);
  		}.bind(this));
  	}
  }.on('init')

});
