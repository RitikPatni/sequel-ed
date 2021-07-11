import Papa from 'papaparse'
const actions = {
  fetchCSV(context, params) {
    context.commit('RESET_FILTERED_DATA')
    return new Promise((resolve, reject) => {
      Papa.parse(
        params.url,
        {
          worker: true,
          download: true,
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            if (results?.data) {
              context.commit('SHOW_TOAST', { type: 'success', message: 'CSV Loaded Successfully' })
              context.commit('SAVE_CSV', results.data);
              context.commit('SAVE_CSV_HEADERS', results.data);
              resolve(results)
            }
            else {
              context.commit('SHOW_TOAST', { type: 'error', message: 'No Data found on the provided URL' })
            }
          },
          error: function (err, file, inputElem, reason) {
            reject(err)
            context.commit('SHOW_TOAST', { type: 'error', message: reason })
          },
        }
      );
    });
  },
  jsonToCSV(context, params) {
    return new Promise((resolve, reject) => {
      var csv = Papa.unparse([
        ...params
      ]);
      resolve(csv)
    });
  }
};
export default actions;
