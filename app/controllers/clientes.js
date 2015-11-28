import Ember from 'ember';

export default Ember.Controller.extend({
	isFailed:false,
  isCommit:false,
  isShowingModal: false,

  actions: {

//se hace la llamada la api, con el numero de documento y tipo del mismo, consulta la cual trae retorna datos personales del cliente  y los productos que tiene  
searchProd: function(){
   // var td=this.get('tipoDocumento');
   var nd=this.get('idClient');
   var td = document.getElementById('tipo').value;
   this.set('isCommit',false);
   var buscar = 'https://spinnerbank-api-internal.herokuapp.com/user/'+td+'/'+nd+'/productos';
   $.getJSON(buscar, function(data) {
    this.set('model', data);
    this.set('modelProd', data[0].products);
    this.set('isCommit',true);
  }.bind(this));
 },

//Se hace uso de la api, se consume con el id de un producto determinado, retorna los movimientos de dicho producto
showModalDialog(idProduct,productName){
  var buscar = 'https://spinnerbank-api-internal.herokuapp.com/product/'+idProduct+'/movements';
  $.getJSON(buscar, function(data) {
    this.set('modelMov', data);
    this.set('modalProductName', productName);
    console.log(productName);
  }.bind(this));
  this.set('isShowingModal',true);
},

closeModalDialog(){
  this.set('isShowingModal',false);
}
}
});
