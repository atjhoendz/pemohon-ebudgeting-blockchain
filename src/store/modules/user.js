const currentUser = JSON.parse(localStorage.getItem('currentUser'))

export default {
  namespaced: true,
  state: {
    currentUser: {
      sub: currentUser?.sub || '',
      exp: currentUser?.exp || '',
      role: currentUser?.role || '',
      username: currentUser?.username || '',
    },
  },
  mutations: {
    SET_CURRENT_USER(state, currentUserData) {
      const { exp, role, username, sub } = currentUserData
      state.currentUser = {
        sub: sub,
        exp: exp,
        role: role,
        username: username,
      }

      localStorage.setItem('currentUser', JSON.stringify(state.currentUser))
    },
    RESET(state) {
      state.currentUser = {}
      localStorage.removeItem('currentUser')
    },
  },
}
