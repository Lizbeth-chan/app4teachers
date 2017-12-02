import DS from 'ember-data';

export default DS.Model.extend({
clave: DS.attr('string'),
nombre: DS.attr('string'),
grupos: DS.hasMany('grupo'), //una materia puede impartirse a varios grupos


});
