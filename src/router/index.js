import Vue from 'vue';
import VueRouter from 'vue-router';
//component
import Home from '@components/Home.vue';
import HelloWorld from '@components/HelloWorld.vue';
import Detail from '@components/Detail.vue';
import ListTodo from '@components/ListToDo.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HelloWorld, name: 'helloworld' },
    { path: '/home', component: Home, 
      children: [
        { path: '/', component: ListTodo, name: 'list-todo' },
        { path: ':id', component: Detail, name: 'detail-todo' },
      ]
    },
];

const router = new VueRouter({
    routes
});

export default router
