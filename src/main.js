import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';
import Vuelidate from 'vuelidate'
import firebase from 'firebase';

// library
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

Vue.use(Vuelidate)

const firebaseConfig = {
    apiKey: "AIzaSyCl9JlSySzQN8M8RlUfgMR_LoKxuYst_tk",
    authDomain: "aerobic-gift-223013.firebaseapp.com",
    databaseURL: "https://aerobic-gift-223013.firebaseio.com",
    projectId: "aerobic-gift-223013",
    storageBucket: "aerobic-gift-223013.appspot.com",
    messagingSenderId: "595431675745",
    appId: "1:595431675745:web:e7a381ee4e53a7f0d2d720",
    measurementId: "G-G93JDSB7R3"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export const db = firebase.firestore()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
