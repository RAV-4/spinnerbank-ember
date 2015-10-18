import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('contacto');
    this.route('perfil');
    this.route('clientes');
    this.resource('productos');
});

export default Router;
