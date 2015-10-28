import Ember from 'ember';

export default Ember.Controller.extend({
	isFailed:false, 

actions: {
  
  compidClient: function(){
  var prueba  = 1111;
  let idClient = this.get('idClient');
  if (idClient === prueba){
    window.alert(idClient);

    }
    else{
      
      this.set('isFailed', true);


    }

  }
}



});
