import DS from 'ember-data';

export default DS.Model.extend({
  fecha: DS.attr('date'),
  descripcion: DS.attr('string'),
  valor: DS.attr('number')
});
