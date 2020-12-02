export const state = () => ({
  err: 1,
  data: {}
});

export const mutations = {
  M_UPDATE_HOME(state, payload) {
    state.err = payload.err;
    state.data = payload.data;
  }
};
export const actions = {
  A_UPDATE_HOME({ commit, state }, payload) {
    commit("M_UPDATE_HOOME", {
      err: 0,
      data: { title: "home模块 action传递的数据" }
    });
  }
};
