import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr(),
  apellido: DS.attr(),
  correo: DS.attr(),
  contraseña: DS.attr(),
  productos: DS.hasMany('producto'),

  nombreCompleto: Ember.computed('nombre', 'apellido', function() {
    return `${this.get('nombre')} ${this.get('apellido')}`;
  })
});
