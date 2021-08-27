const {Request, Response, NextFunction} = require('express');

let beerIdIndex = 1;
const beerArray = [{
    id: 0,
    name : 'Beardy, Boozy & Bitter',
    abv: 14,
    ibu: 120
}];

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
function getBeers(req, res, next) {
    res.json(beerArray) ;   
};

/**
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
 function getOneBeer(req, res, next) {
    const { id } = req.params;
   
    const beer = beerArray.find(beer => beer.id == id)
    if (!beer) {
        res.status(404).json(`Beer with id ${id} not found`);
    } else {
        res.status(200).json(beer)
    }  
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
 function saveBeer(req, res, next) {
    const beer = {...req.body, id: beerIdIndex++}
    beerArray.push(beer);
    res.json(beer);
};

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
 function changeBeer(req, res, next) {
    const body = req.body;
    const {id}= req.params;
    const beer = beerArray.find(beer => beer.id == id)

    if (!beer) {
    return res.status(404).json({error: 'Beer not found'})
    }
    if(body.abv){
        beer.abv = body.abv
    }
    return res.status(201).json(beer);
 };

/**
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
 function deleteBeer(req, res, next) {
    const {id}= req.params;
    const beer = beerArray.find(beer => beer.id == id)
    if (!beer) {
        return res.status(404).json({error: 'Beer not found'})
        }
    else
    beerArray.splice(id, 1);
    res.status(204).json('Beer deleted')
 
 };  
  
module.exports = {
    getBeers,
    getOneBeer,
    saveBeer,
    changeBeer,
    deleteBeer
}