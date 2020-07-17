import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	notes: JSON.parse(localStorage.getItem('notes') || '[]')
  },
  mutations: {
  	   createNote(state, note){
             state.notes.push(
                note
               )
     
          localStorage.setItem('notes', JSON.stringify(state.notes))
     
         },
         deleteNote(state,id){
            state.notes = state.notes.filter(note=>note.id!==id)
            localStorage.setItem('notes', JSON.stringify(state.notes))
         },
         updateNote(state,note){
            state.notes = state.notes.map(el=>{
             if(el.id=== note.id){
               el.title = note.title
               el.todos = note.todos
             }
             return el
          })
         } 
  },
  actions: {
  	createNote({commit}, note){
		  commit('createNote', note)
  	},
  	deleteNote({commit}, id){
		  commit('deleteNote', id)
  	},
    updateNote({commit}, note){
      commit('updateNote', note)
    },

  },
  getters: {
  	allNotes(state){
		return state.notes
  	}
  }
})
