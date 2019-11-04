import * as types from './mutation-types';

export default {
    [types.ADD_TODO](state, data) {
        state.todoList.push(data);
    },
    [types.SET_TODO](state, todoId) {
        let todo = {};
        state.todoList.forEach(function(value) {
            if (todoId == value.id) {
                todo = value;

                return;
            }
        });
        state.todo = todo;
    }
}
