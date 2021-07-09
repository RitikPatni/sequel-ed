import Papa from 'papaparse'
const actions = {
  fetchCSV(context, params) {
    return new Promise((resolve, reject) => {
      Papa.parse(
        params.url,
        {
          worker: true,
          download: true,
          header: true,
          skipEmptyLines: true,
          complete: function (results) {
            console.log(results);
            context.commit('SAVE_CSV', results.data);
            context.commit('SAVE_CSV_HEADERS', results.data);
            resolve(results)
          },
        }
      );
    });
  },
};
export default actions;
