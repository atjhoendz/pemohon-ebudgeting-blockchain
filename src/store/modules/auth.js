import cookie from 'vue-cookies';

export default {
  namespaced: true,
  state: {
    accessToken: cookie.get('Authentication') || '',
    refreshToken: cookie.get('Refresh') || '',
    accessTokenExpDate: '',
  },

  mutations: {
    SET_ACCESS_TOKEN(state, token) {
      state.accessToken = token;
    },
    SET_REFRESH_TOKEN(state, token) {
      state.refreshToken = token;
    },
    SET_ATOKEN_EXP_DATE(state, exp) {
      state.accessTokenExpDate = exp;
    },
  },
};
