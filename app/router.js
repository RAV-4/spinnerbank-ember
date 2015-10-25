import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('contacto');
    this.route('perfil');
    this.route('clientes');
    this.route('inicio');
    this.route('login');
    this.route('principal');
});

export default Router;
