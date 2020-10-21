function priceOrder(input) {

    let priceWhiskey = Number(input.shift());

    let qBeer = Number(input.shift());
    let qWine = Number(input.shift());
    let qRakia = Number(input.shift());
    let qWhiskey = Number(input.shift());

    
    let priceRakia = priceWhiskey / 2;
    let priceWine = priceRakia - (0.4 * priceRakia);
    let priceBeer = priceRakia - (0.8 * priceRakia);

    let sumWhiskey = priceWhiskey * qWhiskey;
    let sumRakia = priceRakia * qRakia;
    let sumWine = priceWine * qWine;
    let sumBeer = priceBeer * qBeer;

    let total = sumWhiskey + sumRakia + sumWine + sumBeer

     
    
    
    console.log(total.toFixed(2));

        

}

priceOrder( [ "63.44", "3.57", "6.35", "8.15", "2.5" ] );