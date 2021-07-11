const mutations = {
  SAVE_CSV(state, data) {
    state.data = data;
  },
  SAVE_CSV_HEADERS(state, data) {
    state.dataHeaders = getKeys(data);
  },
  SELECT_ALL_DATA(state) {
    state.filteredData = undefined
    state.filteredHeaders = undefined
    state.filteredData = state.data
    state.filteredHeaders = getKeys(state.filteredData)
  },
  SELECT_FIRST_100_RECORDS(state) {
    state.filteredData = undefined
    state.filteredHeaders = undefined
    // * Making a clone of data as otherwise splice would alter the original array
    const clonedData = JSON.parse(JSON.stringify(state.data))
    state.filteredData = clonedData.splice(0, state.data.length > 100 ? 100 : state.data.length)
    state.filteredHeaders = getKeys(state.filteredData)
  },
  RESET_FILTERED_DATA(state) {
    state.filteredData = undefined
    state.filteredHeaders = undefined
  }

};
export default mutations;
function getKeys(data) {
  let key = [];
  const keysArray = [];
  for (key in data[0]) {
    if (data[0].hasOwnProperty(key)) {
      keysArray.push(key);
    }
  }
  return keysArray
}

