import DS from 'ember-data';

export default DS.Model.extend({
  respuesta: DS.attr('string'),
  alumno: DS.belongsTo('alumno'),
  correcta: false,
  incorrecta: false

});
