import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  actions:{
    save(){
      let materia= this.get('materia');
      if(Ember.isBlank(materia.get('nombre'))){
        alert('El campo de nombre no puede estar vacio');
        return;
      }
      materia.save().then(()=>{
        Ember.RSVP.all(this.get('materia.grupos').invoke('save')).then(()=>{
          this.sendAction('didSave');
          let name = this.get('materia.nombre');
          alert('se ha creado la materia' + name)
        })
      })
      console.log(materia)
    },
    saveGrupo(){
      this.get('materia').get('grupos').createRecord()//se obtiene la materia, el arreglo de grupos y se crea un record
    },
    destroyGrupo(){
			this.get('materia').get('grupos').invoke('destroyRecord')
		},
  }
});
