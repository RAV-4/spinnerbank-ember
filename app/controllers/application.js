import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),

    loginController: Ember.inject.controller('login'),
    solicitudesController: Ember.inject.controller('solicitudes'),
    isAuthenticated: Ember.computed.reads('loginController.isAuthenticated'),
    asesorActual: Ember.computed.reads('loginController.asesorActual'),

    actions: {
        desloguear: function() {
            this.transitionToRoute('/');
            this.get('session').logout();
        },
        searchSol:  function(){
            this.get('solicitudesController').searchSol();
        }

    }
});
