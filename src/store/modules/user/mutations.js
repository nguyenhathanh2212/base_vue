import * as types from './mutation-types';

export default {
    [types.SET_CURRENT_USER](state, val) {
        state.currentUser = val;
    },
    [types.SET_USER_PROFILE](state, val) {
        state.userProfile = val;
    }
}
