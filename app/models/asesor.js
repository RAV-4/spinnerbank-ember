import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr(),
  apellido: DS.attr(),
  correo: DS.attr(),
  contraseña: DS.attr()
});
