const express = require('express');
const {getBeers, getOneBeer} = require('./beer.controller');

const router = express.Router();

//ENDPOINTS
router.get('/api/beer', getBeers );


module.exports = router;