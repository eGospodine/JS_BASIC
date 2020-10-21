function solve (input) {
   let neededMoney = Number(input.shift());
   let ownedMoney = Number(input.shift());

   let spendCounter = 0;
   let daysCounter = 0;

   while (true) {
       let command = input.shift();
       //let money = Number(input.shift());

        if (command == "spend") {
            ownedMoney -= +input.shift();
            if(ownedMoney <= 0) {
                ownedMoney = 0;
            }
        } else {
            ownedMoney += +input.shift();

        }

       daysCounter++;

       if (daysCounter == 5) {
           console.log(`You can't save the money.`);
           console.log(`${daysCounter}`);
           break;
       } 

       if (ownedMoney >= neededMoney) {
           console.log(`You saved the money for ${daysCounter} days.`);
           break;
       }
   }

}

solve ([  
    "250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"
    
    
    
])