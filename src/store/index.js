import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto'
import todo from './modules/todo'

Vue.use(Vuex);

const store =  new Vuex.Store({
    modules: {
        todo
    } 
}); 

export default store;
