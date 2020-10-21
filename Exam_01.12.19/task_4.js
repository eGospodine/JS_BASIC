function solve (input) {
   let backCapacity = Number(input.shift());
   let command = input.shift();

   let counter = 1;
   let luggageCounter = 0;
   let isFree = true;
    

   while (command !== 'End') {
        let volume = Number(command);
        
        if (counter % 3 == 0) {
            volume *= 1.10;
        }
        if (backCapacity - volume < 0) {
            isFree = false;
            break;
        }
        backCapacity -= volume;
        counter++;
        luggageCounter++;
    command = input.shift();
    
   }

   if (isFree) {
       console.log(`Congratulations! All suitcases are loaded!`);
   } else {
       console.log(`No more space!`);
   }
    
   console.log(`Statistic: ${luggageCounter} suitcases loaded.`);

}
  

solve ([

    "700.5",
"180",
"340.6",
"126",
"220"

  
  ]);