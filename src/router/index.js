import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import store from '@/store';

//component
import Home from '@components/Home.vue';
import Login from '@components/Login.vue';
import Register from '@components/Register.vue';
import Detail from '@components/Detail.vue';
import ListTodo from '@components/ListToDo.vue';

Vue.use(VueRouter);

// handle page reload
const routes = [
    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register, name: 'register' },
    {
        path: '/',
        component: Home,
        meta: {
            requiresAuth: true
        },
        children: [
            { path: '/', component: ListTodo, name: 'list-todo' },
            { path: ':id', component: Detail, name: 'detail-todo' },
        ]
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    store.dispatch('setLoading', true);
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser

    if (requiresAuth && !currentUser) {
        next({ name: 'login' })
    } else if (requiresAuth && currentUser) {
        next()
    } else {
        next()
    }
})

router.afterEach(() => {
    store.dispatch('setLoading', false);
})

export default router
