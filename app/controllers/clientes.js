import Ember from 'ember';

export default Ember.Controller.extend({
	isFailed:false,

actions: {

  compidClient: function(){
  var prueba  = 1111;
  let idClient = this.get('idClient');

  if (idClient === prueba){
    window.alert("Se encontro al cliente con el # de Identificación "+idClient);
    this.set('isFailed', false);
    }
    else{
      this.set('isFailed', true);
    }
  },
      search(idClient) {
      var buscar = 'https://spinnerbank-api-internal-demo.herokuapp.com/user/cc/'+idClient+'/productos';
     $.getJSON(buscar, function(data) {
       this.set('model', data);
       this.set('modelProd', data[0].products);
       console.log(data[0].products);
     }.bind(this));
    },

    searchMov(idProduct){
      var buscarMov = 'https://spinnerbank-api-internal-demo.herokuapp.com/movements/'+idProduct;
      $.getJSON(buscarMov, function(data) {
       this.set('modelMov', data);
       console.log(data);
     }.bind(this));
    }
  }
});