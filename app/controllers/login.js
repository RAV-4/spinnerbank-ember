import Ember from 'ember';

export default Ember.Controller.extend({

    nombreAsesor: 'Maria',
    apellidoAsesor: 'Osorno',
    isAuthenticated: false,
    loginFailed: false, 

    actions: {
        loguear: function() {
            var asesorMail = 'maria.osorno@gmail.com';
            var asesorPass = 'osornom';

            let asesorMailReceptor = this.get('entradaEmail');
            let asesorPassReceptor = this.get('entradaPassword');

            if(asesorMailReceptor === asesorMail || asesorPassReceptor === asesorPass){
                this.set('isAuthenticated', true);
            } else {
                this.set('loginFailed', true);
            }
        }
    }
});
