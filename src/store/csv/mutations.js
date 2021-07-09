const mutations = {
  SAVE_CSV(state, data) {
    state.data = data;
  },
  SAVE_CSV_HEADERS(state, data) {
    let key = [];
    state.dataHeaders = []
    for (key in data[0]) {
      if (data[0].hasOwnProperty(key)) {
        state.dataHeaders.push(key);
      }
    }
  },
  SELECT_ALL_DATA(state) {
    state.filteredData = state.data
  }
};
export default mutations;
