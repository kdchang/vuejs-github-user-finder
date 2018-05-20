import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
Vue.prototype.$http = axios;

const store = new Vuex.Store({
  state: {
    githubUserData: {},
    githubId: '',
  },
  getters: {
    getGihubData: state => (state.githubUserData),
  },
  mutations: {
    setData(state, payload) {
      state[payload.key] = payload.data;
    },
  },
  actions: {
    fetchGithubUserData({ commit }, githubId) {
      axios
        .get(`//api.github.com/users/${githubId}`)
        .then((response) => {
          commit('setData', { data: response.data, key: 'githubUserData' });
        })
        .catch((error) => {
        })
        .finally(() => {
        });
    },
  },
});

export default store;
