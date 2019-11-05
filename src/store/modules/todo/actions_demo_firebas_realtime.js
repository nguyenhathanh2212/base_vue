import * as types from './mutation-types';
import firebase from 'firebase';

var database = null,  todoRef =null;

function configCollection() {
    database = firebase.database();
    todoRef = database.ref('todos');
}

const setTodoList = ({ commit }) => {
    configCollection();
    var todoList = [];
    
    return new Promise((resolve, reject) => {
        todoRef.once('value')
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                todoList.push(childSnapshot.val());
            });

            resolve(todoList);
            commit(types.SET_TODO_LIST, todoList);
        })
        .catch(function(error) {
            reject(error);
        });
    })
}

const addTodo = ({ commit }, data) => {
    configCollection();
    
    return new Promise((resolve) => {
        var newTodoRef = todoRef.push();
        newTodoRef.set(data)
        resolve(true);
        commit(types.ADD_TODO, data);
    })
}

const setTodo = ({ commit }, todoId) => {
    configCollection();
    let todo = {};
    
    return new Promise((resolve, reject) => {
        todoRef.orderByChild('id').equalTo(todoId).once('value')
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                todo = childSnapshot.val();
            });

            resolve(todo);
            commit(types.SET_TODO, todo);
        })
        .catch(function(error) {
            reject(error);
        });
    })
}

const removeTodo = ({ dispatch }, todoId) => {
    configCollection();
    
    return new Promise((resolve) => {
        todoRef.orderByChild('id').equalTo(todoId).once('value')
        .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
                database.ref('todos/' + childSnapshot.key).remove();
            });
            dispatch('setTodoList');
            resolve(true);
        });
    });
}

export default {
    addTodo,
    setTodo,
    setTodoList,
    removeTodo
}
