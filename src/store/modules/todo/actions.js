import * as types from './mutation-types';
import { todosCollection } from '@/firebaseConfig.js';

const setTodoList = ({ rootState, commit, dispatch }) => {
    dispatch('setLoading', true, { root: true });
    var userId = rootState.user.currentUser.uid;

    return new Promise((resolve, reject) => {
        todosCollection.orderBy('created_at').where('user_id', '==', userId).onSnapshot((snapshot) => {
            var todoList = [];
            snapshot.forEach((doc) => {
                todoList.push({
                    _id: doc.id,
                    id: doc.data().id,
                    name: doc.data().name,
                    detail: doc.data().detail,
                })
            });
            resolve(todoList);
            commit(types.SET_TODO_LIST, todoList);
            dispatch('setLoading', false, { root: true });
        }, error => {
            dispatch('setLoading', false, { root: true });
            reject(error);
        });
    })
}

const addTodo = ({ rootState , dispatch }, data) => {
    data.user_id = rootState.user.currentUser.uid;

    return new Promise((resolve, reject) => {
        data.created_at = Date.now();
        todosCollection.add(data)
        .then((response) => {
            dispatch('setTodoList');
            resolve(response);
        })
        .catch((error) => {
            reject(error);
        })
    })
}

const setTodo = ({ commit }, _id) => {
    return new Promise((resolve, reject) => {
        todosCollection.doc(_id).get()
        .then((snapshot) => {
            if (snapshot.exists) {
                resolve(snapshot.data());
                commit(types.SET_TODO, snapshot.data());
            } else {
                reject(false);
            }  
        })
        .catch((error) => {
            reject(error);
        });
    })
}

const removeTodo = ({ dispatch }, _id) => {
    return new Promise((resolve, reject) => {
        todosCollection.doc(_id).delete()
        .then(function() {
            dispatch('setTodoList');
            resolve(true);
        })
        .catch((error) => {
            reject(error);
        });
    });
}

export default {
    addTodo,
    setTodo,
    setTodoList,
    removeTodo
}
