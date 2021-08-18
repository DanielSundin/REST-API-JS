const express = require('express');


const app = express();

app.use(express.json());

app.use((req, res) =>  res.status(404).json('couldnt find'));

app.use((err,req, res, next) => {
    console.trace(err)
    res.status(500).json('something went worng')
});

app.listen(3000);