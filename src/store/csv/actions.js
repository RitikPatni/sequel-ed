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
            context.commit('SHOW_TOAST', { type: 'success', message: 'CSV Loaded Successfully' })
            context.commit('SAVE_CSV', results.data);
            setTimeout(() => {
              context.commit('HIDE_TOAST')
            }, 3000);
            context.commit('SAVE_CSV_HEADERS', results.data);
            resolve(results)
          },
          error: function (err, file, inputElem, reason) {
            reject(err)
            context.commit('SHOW_TOAST', { type: 'error', message: reason })
          },
        }
      );
    });
  },
};
export default actions;
