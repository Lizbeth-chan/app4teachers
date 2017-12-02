import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service('store'),

  actions: {
    borrar(materia){
      materia.get('grupos').invoke('destroyRecord');
      materia.destroyRecord();
    }
  }
});
