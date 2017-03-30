import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  emails: [
    {from: 'Victor', to: 'Edwin',asunto: 'Prueba Vuex',contenido:  'Hola mundo', carpeta: 'Inbox'},
    {from: 'Victor', to: 'Edwin',asunto: 'Prueba Vuex - Archivo',contenido:  'Hola mundo', carpeta: 'Archive'}
  ],
  activeEmail: {}
}

const getters = {
  inbox: state => {
    return state.emails.filter(email => email.carpeta == 'Inbox')
  },
  archive: state => {
    return state.emails.filter(email => email.carpeta == 'Archive')
  },
  trash: state => {
    return state.emails.filter(email => email.carpeta == 'Trash')
  }
}

// define the possible mutations that can be applied to our state
const mutations = {

  ADD_EMAIL (state) {
  const newEmail = {
    from: '',
    to: '',
    asunto: '',
    contenido: '',
    carpeta: ''
  }
    // only mutators can mutate the state
    state.emails.push(newNote)
    state.activeEmail = newEmail
  },

  EDIT_EMAIL (state, email){
    state.activeEmail = email
  },

  SET_ACTIVE_EMAIL (state, email){
    state.activeEmail = email
  }



}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations,
  getters
})
