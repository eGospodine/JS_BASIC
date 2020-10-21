function solve (input) {
   let budget = Number(input.shift());
   let priceTowell = Number(input.shift());
   let percentDiscount = Number(input.shift());

   let priceUmbrella = priceTowell * 2 / 3;
   let priceFlipFlops = priceUmbrella * 0.75;
   let priceBag = (priceFlipFlops + priceTowell) * 1 / 3;

   let totalSum = priceTowell + priceUmbrella + priceFlipFlops + priceBag;

   let totalSumDiscouned = totalSum - (totalSum * percentDiscount / 100);
   let change = totalSumDiscouned - budget;

   
   
   if (totalSumDiscouned <= budget) {
    console.log(`Annie's sum is ${totalSumDiscouned.toFixed(2)} lv. She has ${Math.abs(change).toFixed(2)} lv. left.`);
   } else {
    console.log(`Annie's sum is ${totalSumDiscouned.toFixed(2)} lv. She needs ${Math.abs(change).toFixed(2)} lv. more.`);
   }

}

solve ([
    "25",
    "6",
    "10"
    
    


])