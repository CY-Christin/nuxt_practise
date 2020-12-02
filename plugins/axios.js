export default function({ $axios, redirect, route, store, app: { $cookies } }) {
  //基本信息
  $axios.defaults.timeout = 10000;
  //请求拦截
  $axios.onRequest(config => {
    console.log("请求拦截");
    // config.headers.token='加token
    config.headers.token = "";
    console.log("axios拦截器token", store.state.user.token);
    return config;
  });
  //相应拦截

  $axios.onResponse(res => {
    console.log("响应拦截");
    if (res.data == "" && route.fullPath !== "/login")
      redirect("/login?path=" + route.fullPath);
    return res;
  });

  //错误请求
  $axios.onError(error => {
    return error;
  });
}
