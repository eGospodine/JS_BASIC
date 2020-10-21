function movie(input) {
    let movieBudget = Number(input.shift());
    let actors = Number(input.shift());
    let priceDress = Number(input.shift());
    let priceDressDiscount = 0;
    let totalPriceDress = actors * priceDress;

    if (actors > 150) {
        priceDressDiscount = totalPriceDress * 0.1;
    } 
    
    let priceDressWithDiscount = totalPriceDress - priceDressDiscount;
    let priceScenery = movieBudget * 0.1;

    let commonPrice = priceDressWithDiscount + priceScenery;

    if (commonPrice > movieBudget) {
        let difference = commonPrice - movieBudget;
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`)
    } else {
        let difference = movieBudget - commonPrice;
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`)
    }


}

movie ([ "9587.88", "222", "55.68" ])