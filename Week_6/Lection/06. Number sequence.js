function solve (input) {
    let n = Number(input.shift());
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let minNumber = Number.MAX_SAFE_INTEGER;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let current = Number(input.shift());
        
        if (current > maxNumber ) {
            maxNumber = current;
                
        }

        if (current < minNumber) {
            minNumber = current;
            
        }
    }
    console.log(`Max number: ${maxNumber}`);
    console.log(`Min number: ${minNumber}`);
}

solve ([
    "6",
    "250",
    "5",
    "2",
    "0",
    "100",
    "1000"
    
    
    
])