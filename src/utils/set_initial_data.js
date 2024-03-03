import Papa from 'papaparse';

export default function setInitialData() {
  return new Promise((resolve, reject) => {
    Papa.parse('../public/HCA_Data.csv', { // Assuming 'assets' is a public directory
      download: true,
      header: true,
      complete: function(results) {
        // console.log(results);
        // const ids = results.data.map(row); // Adjust this based on how facility ids are represented
        resolve(results.data);
      },
      error: function(err) {
        reject(err);
      }
    });
  });
}

// getFacilityIds().then(ids => console.log(ids)).catch(err => console.error(err));