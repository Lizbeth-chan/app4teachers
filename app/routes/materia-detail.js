import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let id = params.clave;
    return this.store.find('materia',id)
  },
});
