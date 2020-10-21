function priceOrder(input) {

    let countDay = Number(input.shift());
    let bakers = Number(input.shift());
    let cakes = Number(input.shift());
    let waffels = Number(input.shift());
    let pancakes = Number(input.shift());

    
    let priceCakes = cakes * bakers * countDay * 45;
    let priceWaffels = waffels * bakers * countDay * 5.80;
    let pricePaincakes = pancakes * bakers * countDay * 3.20;
       
    let total = priceCakes + priceWaffels + pricePaincakes;
    let profit = total - (total / 8);
    
    console.log(profit.toFixed(2));

}

priceOrder( [ "20", "8", "14", "30", "16" ] );