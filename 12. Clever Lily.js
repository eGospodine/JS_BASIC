function solve (input) {
   let ageLili = Number(input[0]);
   let priceWashingMachine = Number(input[1]);
   let priceToy = Number(input[2]);

   let totalMoney = 0;
   let savedMoney = 10;
   

   for (let i = 1; i <= ageLili; i++) {
       if (i % 2 == 0) {
           totalMoney += savedMoney;
           totalMoney -= 1;
           savedMoney += 10;
           
       } else {
        totalMoney += priceToy;
       }
       
   }
   
   if (totalMoney >= priceWashingMachine) {
       let diff = totalMoney - priceWashingMachine;
       console.log(`Yes! ${diff.toFixed(2)}`);
   } else {
       diff = totalMoney - priceWashingMachine;
       console.log(`No! ${Math.abs(diff).toFixed(2)}`);
   }

}

solve ([
    '21', '1570.98', '3' 
    

])