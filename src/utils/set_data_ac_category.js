import Papa from 'papaparse';

export default async function setDataAcCategory(column_name, value) {
    // console.log(column_name, value);
  return new Promise((resolve, reject) => {
    Papa.parse('src/assets/HCA_Data.csv', { // Assuming 'assets' is a public directory
      download: true,
      header: true,
      complete: function(results) {
        const filteredData = results.data.filter(row => row[column_name] == value.toUpperCase());
        // console.log(filteredData);
        resolve(filteredData);
      },
      error: function(err) {
        reject(err);
      }
    });
  });
}