import DS from 'ember-data';

export default DS.Model.extend({
preg: DS.attr('string'),
examen: DS.belongsTo('examen'),
respuestas: DS.hasMany('respuesta')
});
