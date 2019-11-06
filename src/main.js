import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store';
import router from '@/router';
import Vuelidate from 'vuelidate';
import { auth } from '@/firebaseConfig.js';

// library
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false
Vue.use(Vuelidate);

let app;
auth.onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      render: h => h(App),
      router,
      store
    }).$mount('#app');
  }
})

