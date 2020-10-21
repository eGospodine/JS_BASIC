function solve (input) {
    let numberShots = Number(input.shift());
    let numberHoles = Number(input.shift());

    let counterShots = 0;

    for (let i = 0; i < numberHoles; i++) {
        let neededPower = Number(input.shift());
        let power = 0;

        while (neededPower > 0) {
            let string = input.shift();
            for(let j = 0; j < string.length; j++) {
                power += string.charCodeAt(j);
            }
            counterShots++;
            power = Math.floor(power / string.length);
            neededPower -= power;

        }

        console.log(`New hole reached! Hits so far: ${counterShots}`);
       
    }

    if (numberShots > counterShots) {
        console.log(`Yes, you won! Total hits: ${counterShots}`);
    } else {
        console.log(`Better luck next time... Total hits: ${counterShots}`);
    }

}
  

solve ([
 
    "3",
    "2",
    "150",
    "WEAK HIT",
    "ANOTHER WEAK HIT",
    "NoTtHaTwEaKhIt",
    "60",
    "WOW THATS THE LAST HOLE?"
    

  
  ]);