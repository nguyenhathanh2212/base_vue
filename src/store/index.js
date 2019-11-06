import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto'
import todo from './modules/todo'
import user from './modules/user'
import { auth } from '@/firebaseConfig.js'

Vue.use(Vuex);

const store =  new Vuex.Store({
    namespaced: true,
    modules: {
        todo,
        user
    },
    state: {
        loading: false,
    },
    mutations: {
        SET_LOADING(state, status) {
            state.loading = status;
        }
    },
    actions: {
        setLoading({ commit }, status) {
            commit('SET_LOADING', status);
        }
    }
}); 

auth.onAuthStateChanged(user => {
    if (user) {
        store.dispatch('user/setCurrentUser', user)
        store.dispatch('user/setUserProfile')
    }
})

export default store;
