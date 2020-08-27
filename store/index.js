//nuxt的state必须为function
const state = () => ({
    userInfo: null,
    accessToken: null,
    refreshToken: null
  }
)

//改变状态值
const mutations = {
  //重置登陆状态
  RESET_USER_STATE(state) {
    state.userInfo = null;
    state.accessToken = null;
    state.refreshToken = null;
  }
}

//行为
const actions = {
  LoginPage({commit}) {
    commit('RESET_USER_STATE');
    window.location.href = `http://localhost:7000?redirectURL=${window.location.href}`
  }
}

export default {
  state,
  mutations,
  actions
}
