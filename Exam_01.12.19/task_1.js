function solve (input) {
    let priceWhiteBread = Number(input.shift());
    let quantityWhiteBread = Number(input.shift());
    let quantityPulnozurnestBread = Number(input.shift());
    let quantityBretzel = Number(input.shift());
    let quantityCroisant = Number(input.shift());
    let holiDay = input.shift();

    let pricePulnozurnestBread = priceWhiteBread * 1.20;
    let priceBretzel = pricePulnozurnestBread * 0.80;
    let priceCroisant = priceBretzel + 1.50;

    
    let totalPrice = (quantityWhiteBread * priceWhiteBread) + 
    (quantityPulnozurnestBread * pricePulnozurnestBread) + 
    (quantityBretzel * priceBretzel) + 
    (quantityCroisant * priceCroisant);
    

    if (holiDay == 'yes') {
        let quantityCake = Number(input.shift());
        let quantityPancake = Number(input.shift());
        let priceCake = priceWhiteBread * 0.80; //proverka
        let pricePancake = priceCake * 0.45;

        totalPrice = totalPrice + (quantityCake * priceCake) + (quantityPancake * pricePancake)

        console.log(`Happy holidays! This will cost you ${totalPrice.toFixed(2)} lv.`);
    } else {
        console.log(`The value of you order is ${totalPrice.toFixed(2)} lv.`);
    }
}
  

solve ([

    "3.5",
"3",
"0",
"10",
"12",
"yes",
"1",
"12"

      
  
  ]);