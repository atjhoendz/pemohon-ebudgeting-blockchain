export default {
  namespaced: true,
  state: {
    currentUser: {
      key: '',
      role: '',
      username: '',
    },
  },
  mutations: {
    SET_CURRENT_USER(state, currentUserData) {
      state.currentUser = currentUserData
    },
  },
}
