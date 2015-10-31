import Ember from 'ember';

export default Ember.Controller.extend({
    //session: Ember.inject.service(),

    loginController: Ember.inject.controller('login'),
    isAuthenticated: Ember.computed.reads('loginController.isAuthenticated'),
    nombreAsesor: Ember.computed.reads('loginController.nombreAsesor'),
    apellidoAsesor: Ember.computed.reads('loginController.apellidoAsesor'),

    actions: {
        desloguear: function() {
            this.set('isAuthenticated', false);
            this.transitionToRoute('/');
        }
    }
});
