const mutations = {
  SHOW_TOAST(state, data) {
    state.toastData = data
  },
  HIDE_TOAST(state) {
    state.toastData = undefined
  }
};
export default mutations;
