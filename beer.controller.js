const {Request, Response, NextFunction} = require('express');

const beerArray = [{
    id: 0,
    name : 'Beardy, Boozy & Bitter',
    abv: 13,
    ibu: 120
}];

/**
 * 
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getBeers = (req, res, next) => {
    res.json(beerArray)    
};

module.exports = {
    getBeers
}