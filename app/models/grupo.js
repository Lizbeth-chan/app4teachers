import DS from 'ember-data';

export default DS.Model.extend({
identificador: DS.attr('string'),
periodo: DS.attr('string'),
profesores: DS.hasMany('profesor'),
alumnos: DS.hasMany('alumno'),
materias: DS.hasMany('materia')
});
