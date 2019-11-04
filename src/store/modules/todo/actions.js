import * as types from './mutation-types';

const addTodo = ({ commit }, data) => {
    commit(types.ADD_TODO, data);
}

const setTodo = ({ commit }, todoId) => {
    commit(types.SET_TODO, todoId);
}

export default {
    addTodo,
    setTodo
}
