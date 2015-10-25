import Ember from 'ember';

export default Ember.Controller.extend({
actions: {

  compidClient: function(){
  let idClient = this.get('idClient');
  if (idClient){
    window.alert(idClient);
    }

  }
}



});
