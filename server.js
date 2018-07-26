const express = require('express');

const app = express();
const port = process.env.PORT || 32321;
const bq = require('./query')

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/getNews/:count?', (req, res) => {
    bq.getNews(req.params.count).then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error);
    });
});

app.get('/getAnalyst', (req, res) => {
    bq.getAnalyst().then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error);
    })
})

app.get('/getTweets', (req, res) => {
    bq.getTweets().then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error);
    });
});

app.get('/customQuery/:tableName/:count', (req, res) => {
    bq.customQuery(req.params.tableName, req.params.count).then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error);
    });
});

app.get('/getTable', (req, res) => {
    bq.getTable().then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error);
    });
});

app.get('/runTestQuery', (req, res) => {
    bq.runTestQuery().then((data) => {
        res.json(data);
    }).catch((error) => {
        console.log(error);
    });
})

app.listen(port, () => {
  console.log(`listening on port ${ port }`);
});