export const state = () => ({
  err: 1,
  msg: "未登录",
  token: "789"
});

export const mutations = {
  M_UPDATE_USER(user, payload) {
    user.err = payload.err;
    user.msg = payload.msg;
    user.data = payload.data;
    user.token = payload.token;
  }
};

export const actions = {
  A_UPDATE_USER({ commit, user }, payload) {
    commit("M_UPDATE_USER", payload);
  }
};
