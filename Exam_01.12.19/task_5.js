function solve (input) {
    let recomDayCallories = Number(input.shift());
    let dayActivities = Number(input.shift());

    let totalCallories = 0;

    for (let i = 1; i <= dayActivities; i++) {
        let type = input.shift();
        let callories = Number(input.shift());

        if (type == 'eat') {
            totalCallories += callories;
            if (totalCallories > recomDayCallories) {
                break;
            }
              
        } else if (type == 'training') {
           if(callories > totalCallories) {
               totalCallories = 0;
           } else {
               totalCallories -= callories;
           }
        }

    }

    if (recomDayCallories < totalCallories) {
          console.log(`Oh no, it seems you ate too much...`); 
          console.log(`Overdose: ${Math.abs(recomDayCallories - totalCallories)}`); 
    } else {
        console.log(`Nice job! Today was a heathy day!`);
        console.log(`Calories to the limit: ${Math.abs(recomDayCallories - totalCallories)}`);
    }

}
  

solve ([
 
    "1200",
"3",
"eat",
"400",
"eat",
"300",
"eat",
"259"

  
  ]);