import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    session_id: ""
  },
  getters: {
    sessionId(state) {
      return state.session_id;
    }
  },
  mutations: {
    SET_SESSION_ID(state, data) {
      state.session_id = data;
    }
  }
});