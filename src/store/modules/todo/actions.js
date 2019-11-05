import * as types from './mutation-types';
import { db } from '@/main';


const setTodoList = ({ commit }) => {
    return new Promise((resolve) => {
        db.collection('todos').orderBy('created_at').onSnapshot((snapshot) => {
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
        });
    })
}

const addTodo = ({ dispatch }, data) => {
    return new Promise((resolve, reject) => {
        data.created_at = Date.now();
        db.collection('todos').add(data)
        .then((response) => {
            resolve(response);
            dispatch('setTodoList');
        })
        .catch((error) => {
            reject(error);
        })
    })
}

const setTodo = ({ commit }, _id) => {
    return new Promise((resolve, reject) => {
        db.collection('todos').doc(_id).get()
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
        db.collection('todos').doc(_id).delete()
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
