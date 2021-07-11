const mutations = {
  SHOW_TOAST(state, data) {
    state.toastData = data
    // * Remove the toast after 3 seconds
    setTimeout(() => {
      state.toastData = undefined
    }, 3000);
  },
  HIDE_TOAST(state) {
    state.toastData = undefined
  }
};
export default mutations;
