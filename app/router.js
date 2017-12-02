import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('nueva-materia');
  this.route('lista-materias');
  this.route('lista-grupos');
  this.route('lista-alumnos');
  this.route('lista-examenes');
  this.route('nuevo-examen');
  this.route('nuevo-alumno');
  this.route('nuevo-grupo');
  this.route('inicio');
  this.route('materia-detail',{path: 'detalles-materia/:clave'});
  this.route('login');
  this.route('grupo-detail', {path: 'detalles-grupo/:identificador'});
});

export default Router;
