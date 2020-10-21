function solve(input) {
    let n = Number(input.shift());
    let counter = 0;
    let checkNumber = 0;
    let max = Number.MIN_SAFE_INTEGER;

    while (counter !== n ) {
        counter ++;
        checkNumber = Number(input.shift());
        if (checkNumber > max) {
            max = checkNumber;
        } 
    }
    console.log(`${max}`);
   

}

solve ([
    "3",
    "-10",
    "20",
    "-30"
    
    
])