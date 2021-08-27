const express = require('express');
const {getBeers, getOneBeer, saveBeer, changeBeer, deleteBeer} = require('./beer.controller');

const router = express.Router();

//ENDPOINTS
router.get('/api/beer', getBeers );
router.get('/api/beer/:id', getOneBeer);
router.post('/api/beer', saveBeer );
router.put('/api/beer/:id', changeBeer);
router.delete('/api/beer/:id', deleteBeer);


module.exports = router;