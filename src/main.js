import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import store from './store';

//component
import Home from './components/Home.vue';
import HelloWorld from './components/HelloWorld.vue';
import Detail from './components/Detail.vue';
import ListTodo from './components/ListToDo.vue';

// library
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.config.productionTip = false

// route
Vue.use(VueRouter);

const routes = [
  { path: '/', component: HelloWorld, name: 'helloworld' },
  { path: '/home', component: Home, 
    children: [
      { path: '/', component: ListTodo, name: 'list-todo' },
      { path: '/:id', component: Detail, name: 'detail-todo' },
    ]
  },
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
