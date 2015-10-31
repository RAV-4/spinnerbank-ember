import Ember from 'ember';

export default Ember.Controller.extend({
  //session: Ember.inject.service(),

  isAuthenticated: false,
  loginFailed: false,
  asesorActual: null,

  actions: {
      /*
      login(user){
        this.get("session").login.user;
      }
      */

      loguear: function() {
          //var asesorMailPrueba = "maria.osorno@spinnerbank.com";
          //var asesorPassPrueba = "osornoms";

          var asesorPrueba = Asesor.create({
            nombre: 'Maria',
            apellido: 'Osorno',
            correo: 'maria.osorno@spinnerbank.com',
            contraseña: 'osornoms'
          });

          let asesorMailReceptor = this.get('entradaEmail');
          let asesorPassReceptor = this.get('entradaPassword');

          if(asesorPrueba.get('correo') === asesorMailReceptor && asesorPrueba.get('contraseña') === asesorPassReceptor){
            this.set('isAuthenticated', true);
            this.transitionToRoute('clientes');
            this.set('loginFailed', false);
            this.set('asesorActual', asesorPrueba.get('nombreCompleto'));
          } else {
              this.set('loginFailed', true);
          }
      }
  }
});

//Objeto-Clase Asesor
var Asesor = Ember.Object.extend({
  nombre: null,
  apellido: null,
  correo: null,
  contraseña: null,

  nombreCompleto: Ember.computed('nombre', 'apellido', function() {
    return `${this.get('nombre')} ${this.get('apellido')}`;
  })
});
