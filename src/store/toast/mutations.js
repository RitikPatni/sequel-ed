const mutations = {
  // TODO Convert this to an array option so that at a time multiple toasts can be logged
  SHOW_TOAST(state, data) {
    state.toastData = data
    // * Added the option to remove the toast after 3 seconds
    setTimeout(() => {
      state.toastData = undefined
    }, 3000);
  },
  HIDE_TOAST(state) {
    state.toastData = undefined
  }
};
export default mutations;
