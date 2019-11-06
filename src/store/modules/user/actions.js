import * as types from './mutation-types';
import * as fb from '@/firebaseConfig.js';

const setUserProfile = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        fb.usersCollection.doc(state.currentUser.uid).get()
            .then(result => {
                resolve(result.data());
                commit(types.SET_USER_PROFILE, result.data());
            }).catch(error => {
                reject(error);
            })
    })
}

const setCurrentUser = ({ commit }, user) => {
    commit(types.SET_CURRENT_USER, user);
}

const clearData = ({ commit }) => {
    commit(types.SET_CURRENT_USER, null);
    commit(types.SET_USER_PROFILE, {});
}

export default {
    setUserProfile,
    setCurrentUser,
    clearData
}
