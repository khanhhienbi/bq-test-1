const bq = require('@google-cloud/bigquery');
const pectendata = new bq({
	projectId : ' ',
	keyFilename : './apiuser.json'
});
const dataset = pectendata.dataset('pecten_dataset');

const tableQuery = " ";
const twitterQuery = " ";
const newsAll = " "
const analystQuery = " ";
const testQuery = " "

module.exports = {
  getNews: (numberOfRow = 10) => {
    return new Promise((resolve, reject) => {
      let data = [];
      pectendata.createQueryStream(tableQuery + numberOfRow)
      .on('error', (error) => {
        reject(error);
      }).on('data', (row) => {
        data.push(row);
      }).on('end', () => {
        resolve(data);
      });
    })
  },

  getMADeals: (numberOfRow = 10) => {
    return new Promise((resolve, reject) => {
      let data = [];
      pectendata.createQueryStream(maQuery + numberOfRow)
      .on('error', (error) => {
        reject(error);
      }).on('data', (row) => {
        data.push(row);
      }).on('end', () => {
        resolve(data);
      });
    })
  },

  getAnalyst: () => {
    return new Promise((resolve, reject) => {
      let data = [];
      pectendata.createQueryStream(analystQuery)
      .on('error', (error) => {
        console.log(error);
        reject(error);
      }).on('data', (row) => {
        data.push(row);
      }).on('end', () => {
        resolve(data);
      });
    })
  },

  getSummary: () => {
    return new Promise((resolve, reject) => {
      let data = [];
      pectendata.createQueryStream(summaryQuery)
      .on('error', (error) => {
        reject(error);
      }).on('data', (row) => {
        data.push(row);
      }).on('end', () => {
        resolve(data);
      });
    })
  },

  customQuery:(query) => {
    return new Promise((resolve, reject) => {
      let data = [];
      pectendata.createQueryStream(query)
      .on('error', (error) => {
        reject(error);
      }).on('data', (row) => {
        data.push(row);
      }).on('end', () => {
        resolve(data);
      });
    })
  },
}
