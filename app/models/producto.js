import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr('string'),
  tipo: DS.attr('string'),
  saldo: DS.attr('number'),
  movimientos: DS.hasMany('movimiento')

});
