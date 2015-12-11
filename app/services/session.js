import Ember from 'ember';

export default Ember.Service.extend({

  currentUser: null,
  store: Ember.inject.service(),
  login(asesor){
    this.set("currentUser", asesor.name);
    Cookies.set("userId",asesor.documentNumber);
  },

  logout(){
    this.set("currentUser", null);
    Cookies.remove("userId");
  },

  initializeFromCookie: function(){
  	var userId = Cookies.get('userId');
  	if(!!userId){
  		var buscar = 'https://spinnerbank-api-internal.herokuapp.com/user/cc/'+userId+'/productos';
   		$.getJSON(buscar, function(data) {
    		this.set('currentUser',data[0].name);
  		}.bind(this));
  	}
  }.on('init')

});
