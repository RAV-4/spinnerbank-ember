import Ember from 'ember';

export default Ember.Controller.extend({
  //session: Ember.inject.service(),

  isAuthenticated: false,
  loginFailed: false,
  //usuarioActual: null,

  actions: {
      /*
      login(user){
        this.get("session").login.user;
      }
      */
      loguear: function() {
          var asesorMailPrueba = "maria.osorno@spinnerbank.com";
          var asesorPassPrueba = "osornoms";

          let asesorMailReceptor = this.get('entradaEmail');
          let asesorPassReceptor = this.get('entradaPassword');

          if(asesorMailPrueba === asesorMailReceptor && asesorPassPrueba === asesorPassReceptor){
            this.set('isAuthenticated', true);
            this.transitionToRoute('clientes');
            this.set('loginFailed', false);
            //  this.set('usuarioActual', this.get('entradaEmail'));
          } else {
              this.set('loginFailed', true);
          }
      }
  }
});
