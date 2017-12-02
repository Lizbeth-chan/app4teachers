import DS from 'ember-data';

export default DS.Model.extend({
  nomina: DS.attr('string'),
  nombre: DS.attr('string'),
  apellido_paterno: DS.attr('string'),
  apellido_materno: DS.attr('string'),
  grupos: DS.hasMany('grupo')
});
