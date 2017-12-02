import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    veAlaLista(){
      return this.transitionToRoute('lista-materias');
    }
  }
});
