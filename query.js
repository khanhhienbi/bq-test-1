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
  customQuery:(tableName, count) => {
    return new Promise((resolve, reject) => {
      let data = [];
      pectendata.createQueryStream("SELECT * FROM pecten_dataset." + tableName + " LIMIT " + count)
      .on('error', (error) => {
        reject(error);
      }).on('data', (row) => {
        data.push(row);
      }).on('end', () => {
        resolve(data);
      });
    })
  },
  getTable:() => {
    return new Promise((resolve, reject) => {
      let data = [];
      pectendata.getDatasetsStream("show tables")
      .on('error', (error) => {
        reject(error);
      }).on('data', (row) => {
        data.push(row);
      }).on('end', () => {
        resolve(data);
      });
    })
  },
  getTweets: () => {
    return new Promise((resolve, reject) => {
      let data = [];
      pectendata.createQueryStream(twitterQuery)
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
        reject(error);
      }).on('data', (row) => {
        data.push(row);
      }).on('end', () => {
        resolve(data);
      });
    })
  },
  runTestQuery: () => {
    return new Promise((resolve, reject) => {
      let data = [];
      pectendata.createQueryStream(testQuery)
      .on('error', (error) => {
        reject(error);
      }).on('data', (row) => {
        data.push(row);
      }).on('end', () => {
        resolve(data);
      });
    })
  }
}
