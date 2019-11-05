import * as types from './mutation-types';

export default {
    [types.SET_TODO_LIST](state, dotoList) {
        state.todoList = dotoList;
    },
    [types.SET_TODO](state, todo) {
        state.todo = todo;
    }
}
