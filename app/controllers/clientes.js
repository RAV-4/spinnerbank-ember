import Ember from 'ember';

export default Ember.Controller.extend({
	isFailed:false,
  isShowingModal: false,

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
     }.bind(this));
    },

    showModalDialog(idProduct,productName){
      var buscar = 'https://spinnerbank-api-internal-demo.herokuapp.com/movements/'+idProduct;
      $.getJSON(buscar, function(data) {
      this.set('modelMov', data);
      this.set('modalProductName', productName)
       console.log(productName);
     }.bind(this));
      this.set('isShowingModal',true)
    },

    closeModalDialog(){
      this.set('isShowingModal',false)
    }
  }
});