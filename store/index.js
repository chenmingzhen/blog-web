//nuxt的state必须为function
const state = () => ({
  userInfo: null,
  accessToken: null,
  refreshToken: null
});

//改变状态值
const mutations = {
  //重置登陆状态
  RESET_USER_STATE(state) {
    state.userInfo = null;
    state.accessToken = null;
    state.refreshToken = null;
  },
  //刷新页面后 重新更新状态
  UPDATE_ALL_STATE(state, data) {
    state.userInfo = data.userInfo;
    state.accessToken = data.accessToken;
    state.refreshToken = data.refreshToken;
  }
};

//行为
const actions = {
  //每次刷新 服务端自动调用
  nuxtServerInit({ commit }, { app }) {
    const data = {};
    data.userInfo = app.$cookies.get("userInfo");
    data.accessToken = app.$cookies.get("accessToken");
    data.refreshToken = app.$cookies.get("refreshToken");
    commit("UPDATE_ALL_STATE", data);
  },

  LoginPage({ commit }) {
    commit("RESET_USER_STATE");
    window.location.href = `http://localhost:7000?redirectURL=${window.location.href}`;
  },
  //退出登陆
  UserLogout({ commit }) {
    commit("RESET_USER_STATE");
    window.location.href = `${process.env.authURL}/logout?redirectURL=${window.location.href}`;
  }
};

export default {
  state,
  mutations,
  actions
};
