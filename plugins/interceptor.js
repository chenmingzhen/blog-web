//不能在 utils/request.js 中声明，因为accessToken 是要通过 store 来获取状态值，
// 而在 nuxt 中普通的js中获取 store 对象很不方便。需要借助 nuxt 插件方式来进行获取 store 对象，
// 插件中可以接收到 context 上下文对象，从而获取到 store 对象来获取state中的状态值。
export default ({ store, route, redirect, $axios }) => {
  $axios.onRequest(config => {
    console.log("interceptor work");
    const accessToken = store.state.accessToken;
    if (accessToken) {
      //请求头带上令牌
      config.header.Authorization = "Bearer " + accessToken;
    }
    return config;
  });

  $axios.onResponse(response => {
    return response;
  });

  //响应401 刷新令牌请求
  $axios.onError(error => {
    console.log(error.response.status);
    //非401未认证，放行
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    sendrefreshRequest(store, route, redirect);
    return Promise.reject("令牌过期，重新登陆");
  });
};

//获得重定向地址
const redirectURL = route => {
  if (process.client) {
    return window.location.href;
  }
  return process.env._AXIOS_BASE_URL_.replace("api", "") + route.path;
};

//防止并发重复请求, true 还未请求，false 正在请求刷新
let isLock = true;
const sendrefreshRequest = (store, route, redirect) => {
  if (isLock && store.state.refreshToken) {
    // 有刷新令牌，防止并发重复请求刷新，
    isLock = false;
    // 通过刷新令牌获取新令牌，
    redirect(`${process.env.authURL}/refresh?redirectURL=${redirect(route)}`);
  } else {
    isLock = true;
    // 没有刷新令牌，跳转到登录页
    // 注意不要使用 store.dispatch('LoginPage') ，因为 LoginPage 里面使用了window对象，nuxt服务 端是没有此对象的，
    store.commit("RESET_USER_STATE");
    //服务端帮助跳到登陆页
    redirect(`${process.env.authURL}?redirectURL=${redirectURL(route)}`);
  }
};
