import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  //isAuthenticated: false,
  loginFailed: false,
  currentUser: null,

  actions: {

    loguear: function() {

          /*var asesorPrueba = Asesor.create({
            nombre: 'Maria',
            apellido: 'Osorno',
            correo: 'maria.osorno@spinnerbank.com',
            contraseña: 'osornoms'
          });*/

let asesorMailReceptor = this.get('entradaEmail');
let asesorPassReceptor = this.get('entradaPassword');

var buscar = 'https://spinnerbank-api-internal.herokuapp.com/user/'+asesorMailReceptor+'/123/productos';
$.getJSON(buscar, function(data) {

console.log(data[0].documentNumber);
console.log(asesorPassReceptor);


if(data[0].documentType === asesorMailReceptor && data[0].name === asesorPassReceptor){
            //this.set('isAuthenticated', true);
            this.transitionToRoute('clientes');
            //this.set('loginFailed', false);
            this.set('currentUser', data[0].name);
            this.get("session").login(data[0]);
          } else {
            this.set('loginFailed', true);
          }
          }.bind(this));
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
