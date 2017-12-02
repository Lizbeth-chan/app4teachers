import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    let materia = this.get('store').createRecord('materia', {});
    return materia;
  },

  actions:{
    willTransition(transition){
      this.get('currentModel').rollbackAttributes();
      //ember documentacion
    }

  }
});
