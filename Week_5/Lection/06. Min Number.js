function solve(input) {
    let n = Number(input.shift());
    let counter = 0;
    let checkNumber = 0;
    let min = Number.MAX_SAFE_INTEGER;

    while (counter !== n ) {
        counter ++;
        checkNumber = Number(input.shift());
        if (checkNumber < min) {
            min = checkNumber;
        } 
    }
    console.log(`${min}`);
   

}

solve ([
    "3",
    "-10",
    "20",
    "-30"
    
    
])