// 1. `Datasource.getPrices()` returns a Promise which provides fulfilment handler with an array of prices retrieved from a remote pricing engine.
// 2. The remote price data can be retrieved from endpoint above.
// 3. `price.mid()` returns the mid-point value between `price.buy` and `price.sell`.
// 4. `price.quote()` returns the quote currency (counter currency) of the trade pair, e.g. for ETHSGD pair the quote currency is SGD.
const fetch = require ('node-fetch');

class Datasource {
    constructor() {};

    getPrices(){
        var promise = new Promise(function(resolve, reject){
            var url = 'https://static.ngnrs.io/test/prices';
            var prices;
            fetch(url)
            .then((resp) => resp.json())
            .then(function(dataFromResp){
                prices = dataFromResp.data.prices;
                prices.forEach(price => {
                    price.mid = function(){
                        return (price.buy + price.sell)/2;
                    }
                    price.quote = function(){
                        return price.pair.substring(3);
                    }
                });
                resolve(prices);
            })
            .catch(function(error) {
                reject(error);
            })
        });
        return promise;
    }; 
};

module.exports = new Datasource();

let ds = new Datasource();

ds.getPrices()   
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.log(error);
    });
