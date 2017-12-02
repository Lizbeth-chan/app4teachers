import DS from 'ember-data';

export default DS.Model.extend({
id_alumno: DS.attr('string'),
nombre: DS.attr('string'),
apellido_paterno: DS.attr('string'),
apellido_materno: DS.attr('string'),
calificacion: DS.attr('int'),
grupo: DS.hasMany('grupo'),
examenes: DS.hasMany('examen')
});
