import Ember from 'ember';

export default Ember.Controller.extend({

  infoClienteController: Ember.inject.controller('info-cliente'),
  
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
        /*jshint -W117*/ //elimina la alerta del no definido
       $.getJSON(buscar, function(data) {
         /*jshint +W117*/ //elimina la alerta del no definido
        this.set('model', data);
        this.set('modelProd', data[0].products);
        this.set('isCommit',true);
      }.bind(this));
     },

    //Se hace uso de la api, se consume con el id de un producto determinado, retorna los movimientos de dicho producto
    showModalDialog(idProduct,productName){
      var buscar = 'https://spinnerbank-api-internal.herokuapp.com/product/'+idProduct+'/movements';
       /*jshint -W117*/ //elimina la alerta del no definido
      $.getJSON(buscar, function(data) {
         /*jshint +W117*/ //elimina la alerta del no definido
        this.set('modelMov', data);
        this.set('modalProductName', productName);
      }.bind(this));
      this.set('isShowingModal',true);
    },

    closeModalDialog(){
      this.set('isShowingModal',false);
    },


    infoCliente(documentNumber, documentType){
            this.transitionToRoute('infoCliente');
            this.get('infoClienteController').searchClient(documentNumber,documentType);
    }
  }
});
