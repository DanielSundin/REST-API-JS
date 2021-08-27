const express = require('express');
const beerRouter = require('./beer.router');
const app = express();

app.use(express.json());

app.use(beerRouter);

app.use((req, res) =>  res.status(404).json('couldnt find'));

app.use((err,req, res, next) => {
    console.trace(err)
    res.status(500).json('something went wrong')
});

app.listen(3000);


